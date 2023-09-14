import { ForbiddenException, HttpException, HttpStatus, Injectable, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

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
			return 
		}
		const user = await this.accessAuthUserInfo(token.access_token)
		const authUser = await this.userService.findUserByEmail(user.email)
		if (!authUser) {
			await this.userService.createUser({
				username: user.login,
				email: user.email,
				avatar: user.image.link
			})
		}

		res.redirect(`${process.env.FRONTEND_URL}/auth?tranc_token=1234567`)
	}

	// Validate access token
	validateToken(@Req() req: Request) {
		const authorization = req.headers['authorization']
		if (!authorization) {
			throw new HttpException('Bad Request - Missing Authorization token', HttpStatus.BAD_REQUEST);
		}
		const token = authorization.split(' ')[1]
		// check if there is a user with associated token
	}
}
