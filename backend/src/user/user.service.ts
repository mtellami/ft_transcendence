import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

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
}
