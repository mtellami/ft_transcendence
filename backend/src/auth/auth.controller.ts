import { BadRequestException, Controller, Get, Query, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get()
	authenticate(@Req() req: Request) {
		return this.authService.authenticate(req)
	}

	@Get('/login')
	login(@Query('code') code: string) {
		if (code === undefined) {
      throw new BadRequestException('Missing authentication code query');
    }
		return this.authService.login(code)
	}
	
}
