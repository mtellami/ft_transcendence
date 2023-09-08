import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user.login.dto';
import { UserSigninDto } from './dto/user.signin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

	@Post('login')
	userLogin(@Body() userLoginDto: UserLoginDto ) {
		return this.userService.login(userLoginDto); 
	}

	@Post('/signin')
	userSignIn(@Body() userSignInDto : UserSigninDto) {
		return this.userService.signIn(userSignInDto);
	}

	@Get('/home')
	home(): string {
		return "<h1>Dashboard</h1>"
	}
}
