import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class UserService {
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
}
