import { BadRequestException, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/callback')
	login(@Query('code') code: string, @Res() res: Response) {
		if (code === undefined) {
      throw new BadRequestException('Missing authentication code query');
    }
		this.authService.login(code, res)
	}

	@Post('/validate')
	validate(@Req() req: Request) {
		this.authService.validateToken(req)
	}
}
