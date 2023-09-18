import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dto/user.create.dto';
import prisma from './client.prisma';

@Injectable()
export class PrismaService {

	async findUserByUsername(username: string) {
		try {
			const getUser = await prisma.user.findUnique({
    		where: {
    	  	username: username,
    		},
			})
			return getUser
		} catch (error) {
			console.log('Error: cant connect to database')
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async createUser(user: UserCreateDto) {
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
