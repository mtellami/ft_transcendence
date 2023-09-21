import { Body,
	Controller,
	Get,
	Param,
	Patch,
	Req,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';

import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserUpdateDto } from './dto/user.update.dto';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UseGuards(AuthGuard)
	@Get(':username')
	getUserData(@Param('username') username: string){
		return this.userService.getUserData(username)
	}

	@UseGuards(AuthGuard)
	@Patch('setting')
	@UseInterceptors(FileInterceptor('avatar'))
	updateUser(@UploadedFile() avatar: Express.Multer.File,
		@Body() userUpdateDto: UserUpdateDto,
		@Req() req: Request) {
		return this.userService.updateUser(avatar, userUpdateDto, req)
	}
}
