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
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async createUser(user: UserCreateDto) {
		try {
			const newUser = await prisma.user.create({
				data: {
					username: user.username,
					avatar: user.avatar,
				}
			})
			return newUser
		} catch (error) {
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
