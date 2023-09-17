import { HttpException, HttpStatus, Injectable, Req } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserCreateDto } from './dto/user.create.dto';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class UserService {
	constructor(private readonly jwtService: JwtService) {}

	async findUserByEmail(userEmail: string): Promise<User> {
		const prisma = new PrismaClient()
		try {
			const getUser = await prisma.user.findUnique({
    		where: {
    	  	email: userEmail,
    		},
			})
			return getUser
		} catch (error) {
			console.log('Error: cant connect to database')
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async createUser(user: UserCreateDto) {
		const prisma = new PrismaClient()

		try {
			await prisma.user.create({
				data: {
					username: user.username,
					email: user.email,
					avatar: user.avatar
				}
			})
		} catch (error) {
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Validate access token
	async getUser(@Req() req: Request) {
		const authorization = req.headers['authorization']
		if (!authorization) {
			throw new HttpException('Bad Request - Missing Authorization token', HttpStatus.BAD_REQUEST);
		}
		const token = authorization.split(' ')[1]
		const user = this.jwtService.verifyToken(token)
		const us = await this.findUserByEmail(user.email)
		return {
			username: us.username,
			avatar: us.avatar,
		}
	}
}
