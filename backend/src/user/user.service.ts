import { BadRequestException, Body, HttpException, HttpStatus, Injectable, NotFoundException, Req, UploadedFile } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import * as fs from 'fs'
import { UserUpdateDto } from './dto/user.update.dto';

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	async getUserData(username: string) {
		const user = await this.prismaService.findUserByUsername(username)
		if (!user) {
			throw new NotFoundException('User Not found');
		}
		return user
	}

	async updateUser(@UploadedFile() avatar: Express.Multer.File,
		@Body() userUpdateDto: UserUpdateDto,
		@Req() req: Request) {

		const user = req['user']
		try {
			if (avatar) {
				const uploadDir = './avatar'
				if (!fs.existsSync(uploadDir)) {
					fs.mkdirSync(uploadDir)
				}
				const file = uploadDir + '/' + user.intraId;
				if (fs.existsSync(file)) {
					fs.unlinkSync(file)
				}
				fs.writeFileSync(file, avatar.buffer)
				userUpdateDto.avatar = file
			}
			const _ = await this.prismaService.updateUser(user, userUpdateDto)
			return _
		} catch (error) {
      throw new BadRequestException('Bad request: failed to update user information');
		}
	}

	async removeAccount(@Req() req: Request) {
		const user = req['user']
		return this.prismaService.removeUserById(user.intraId)
	}
}
