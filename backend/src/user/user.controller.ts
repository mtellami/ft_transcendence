import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	getUser(@Req() req: Request) {
		return this.userService.getUser(req)
	}
}
