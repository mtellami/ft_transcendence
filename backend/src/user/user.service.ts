import { HttpException, HttpStatus, Injectable, Req } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserCreateDto } from './dto/user.create.dto';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class UserService {
	constructor(private readonly jwtService: JwtService) {}

	async findUserByEmail(userEmail: string) {
		const prisma = new PrismaClient()
		const getUser = await prisma.user.findUnique({
    	where: {
      	email: userEmail,
    	},
		})
		return getUser
	}

	async createUser(user: UserCreateDto) {
		const prisma = new PrismaClient()

		await prisma.user.create({
			data: {
				username: user.username,
				email: user.email,
				avatar: user.avatar
			}
		})
	}

	// Validate access token
	getUser(@Req() req: Request) {
		const authorization = req.headers['authorization']
		if (!authorization) {
			throw new HttpException('Bad Request - Missing Authorization token', HttpStatus.BAD_REQUEST);
		}
		const token = authorization.split(' ')[1]
		const user = this.jwtService.verifyToken(token)
		return user
	}

}
