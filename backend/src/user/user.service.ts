import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UserService {
	login(userLogin: UserLoginDto): string {
		return `user ${userLogin.username} is login successfully`
	}
}
