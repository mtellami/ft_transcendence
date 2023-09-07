import { UserService } from './user.service';
import { UserLoginDto } from './dto/user.login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userLogin(userLoginDto: UserLoginDto): string;
}
