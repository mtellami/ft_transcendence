import { HttpException, HttpStatus, Injectable, Req } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
	private readonly secretKey = process.env.JWT_SECRET_KEY

	generateToken(payload: any) {
		return jwt.sign(payload, this.secretKey)
	}

	verifyToken(token: string) {
		try {
    	return jwt.verify(token, this.secretKey);
    } catch (error) {
			throw new HttpException('Unauthorized - invalid access token', HttpStatus.UNAUTHORIZED)
    }
	}

	extractToken(@Req() req: Request) {
		const authorization = req.headers['authorization']
		if (!authorization) {
			return authorization
		}
		const value = authorization.split(' ')
		if (value.length != 2) {
			return null
		}
		return value[0] === 'Bearer' ? value[1] : null
	}
}
