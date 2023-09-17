import { ForbiddenException, HttpException, HttpStatus, Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from 'src/jwt/jwt.service';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

	// Get User Access Token (42.AUTH)
	async accessToken(code: string | any) {
		const formData = {
			"grant_type": 'authorization_code',
			"client_id": `${process.env.API_UID}`,
			"client_secret": `${process.env.API_SECRET_KEY}`,
			"code": `${code}`,
			"redirect_uri": `${process.env.API_REDIRECT_URL}`,
		}
    try {
			const response = await fetch('https://api.intra.42.fr/oauth/token', {
  			method: 'POST',
  			headers: { 'Content-Type': 'application/json' },
  			body: JSON.stringify(formData),
			});
      if (!response.ok) {
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: "Cant get the user token"
          },
           HttpStatus.BAD_REQUEST); 
        }
			const data = await response.json()
      return data;

    } catch (error) {
			return null
    }
	}
	// Get User Information (42.AUTH)
	async accessAuthUserInfo(accessToken: string) {    
    try {
      const response = await fetch("https://api.intra.42.fr/v2/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      if (response.ok) {
        const data = await response.json()
        return data;
      } else {
				throw new ForbiddenException()
			}
    }
    catch(error) {
			throw Error(error) 
    }
  }

	// login
	async login(code: string, @Res() res: Response) {
		const token = await this.accessToken(code)
		if (!token) {
			res.redirect(`${process.env.FRONTEND_URL}/login`)
			throw new UnauthorizedException('Unauthorized')
		}
		try {
			const user = await this.accessAuthUserInfo(token.access_token)
			let authUser = await this.userService.findUserByEmail(user.email)
			if (!authUser) {
				await this.userService.createUser({
					username: user.login,
					email: user.email,
					avatar: user.image.link
				})
				authUser = await this.userService.findUserByEmail(user.email)
			}
			const access_token = this.jwtService.generateToken({
				id: authUser.id,
				email: authUser.email,
			})
			res.redirect(`${process.env.FRONTEND_URL}/auth?tranc_token=${access_token}`)
		} catch (error) {
			res.redirect(`${process.env.FRONTEND_URL}/login`)
		}
	}
}
