import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UseGuards(AuthGuard)
	@Get(':username')
	getUserData(@Param('username') username: string){
		return this.userService.getUserData(username)
	}
}
