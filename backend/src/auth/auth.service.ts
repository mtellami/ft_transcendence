import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prismaService: PrismaService,
	) {}

	// Get User Access Token (42.AUTH)
	async accessToken(code: string) {
		const formData = {
			"grant_type": 'authorization_code',
			"client_id": `${process.env.API_UID}`,
			"client_secret": `${process.env.API_SECRET_KEY}`,
			"code": `${code}`,
			"redirect_uri": `${process.env.API_REDIRECT_URL}`,
		}
		const response = await fetch('https://api.intra.42.fr/oauth/token', {
  		method: 'POST',
  		headers: { 'Content-Type': 'application/json' },
  		body: JSON.stringify(formData),
		});
    if (!response.ok) {
			throw new UnauthorizedException('Unauthorized')
    }
		const data = await response.json()
    return data;
	}

	// Get User Information (42.AUTH)
	async accessAuthUserInfo(accessToken: string) {    
    const response = await fetch("https://api.intra.42.fr/v2/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    if (response.ok) {
      const data = await response.json()
      return data;
    } else {
			throw new UnauthorizedException('Unauthorized')
		}
  }

	// login
	async login(code: string) {
		const intraToken = await this.accessToken(code)
		const user = await this.accessAuthUserInfo(intraToken.access_token)
		let authUser = await this.prismaService.findUserByUsername(user.login)
		if (!authUser) {
			authUser = await this.prismaService.createUser({
				username: user.login,
				avatar: user.image.link
			})
		}
		const token = this.jwtService.generateToken({
			id: authUser.id,
			username: authUser.username,
		})
		return {access_token: token}
	}

	// Authenticate logged user 
	async authenticate(@Req() req: Request) {
		const token = this.jwtService.extractToken(req)
		if(!token) {
				throw new UnauthorizedException('Unauthorized')
		} 
		const data = this.jwtService.verifyToken(token)
		const user = await this.prismaService.findUserByUsername(data.username)
		return {
			username: user.username,
			avatar: user.avatar,
		}
	}
}
