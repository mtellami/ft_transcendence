import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserCreateDto } from 'src/user/dto/user.create.dto';

@Injectable()
export class PrismaService {

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
}
