import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user.login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

	@Post('login')
	userLogin(@Body() userLoginDto: UserLoginDto ) {
		return this.userService.login(userLoginDto); 
	}
}
