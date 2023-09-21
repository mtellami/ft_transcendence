import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/user/dto/user.create.dto';
import prisma from './client.prisma';
import { UserUpdateDto } from 'src/user/dto/user.update.dto';

@Injectable()
export class PrismaService {

	async findUserById(id: number){
		try {
			const getUser = await prisma.user.findUnique({
    		where: {
    	  	intraId: id,
    		},
			})
			return getUser
		} catch (error) {
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async findUserByUsername(username: string) {
		try {
			const getUser = await prisma.user.findUnique({
				where: {
					username: username,
				},
			})
			return getUser
		} catch (error) {
			// console.log(error)
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async createUser(user: UserCreateDto) {
		try {
			const newUser = await prisma.user.create({
				data: {
					intraId: user.intraId,
					username: user.username,
					email: user.email,
					avatar: user.avatar,
				}
			})
			return newUser
		} catch (error) {
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async updateUser(user: any, userNewData: UserUpdateDto) {
		const existUser = await this.findUserByUsername(userNewData.username)
		if (existUser) {
			throw new BadRequestException('Bad request: username already exist')
		}
		try {
			await prisma.user.update({
				where: { intraId: user.intraId },
				data: userNewData
			})
		} catch (error) {
			throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
