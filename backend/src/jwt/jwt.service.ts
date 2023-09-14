import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'


@Injectable()
export class JwtService {
	private readonly secretKey = process.env.JWT_SECRET_KEY

	generateToken(payload: any){
		return jwt.sign(payload, this.secretKey)
	}

	verifyToken(token: string) {
		try {
    	return jwt.verify(token, this.secretKey);
    } catch (error) {
			throw new UnauthorizedException('Unauthorized: invalid access token')
    }
	}
}
