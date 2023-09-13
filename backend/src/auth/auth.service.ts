import { ForbiddenException, HttpException, HttpStatus, Injectable, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AuthService {

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
		// serch for user by unique entity and create if not exist
		// set cookis when jwt token
		res.redirect(`${process.env.FRONTEND_URL}`)
	}
}
