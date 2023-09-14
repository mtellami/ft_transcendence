import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	getUser(@Req() req: Request) {
		return this.userService.getUser(req)
	}
}
