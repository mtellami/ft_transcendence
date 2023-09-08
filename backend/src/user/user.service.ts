import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user.login.dto';
import { UserSigninDto } from './dto/user.signin.dto';

@Injectable()
export class UserService {
	login(userLogin: UserLoginDto): string {
		return `user ${userLogin.username} is login successfully`
	}

	signIn(userSignin: UserSigninDto): string {
		return `user ${userSignin.username} created successfully`
	}
}
