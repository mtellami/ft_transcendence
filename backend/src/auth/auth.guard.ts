import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "src/services/jwt.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const token = this.jwtService.extractToken(request)
		if (!token) {
			throw new UnauthorizedException()
		}
		try {
			const payload = this.jwtService.verifyToken(token)
			request['user'] = payload
		} catch (error) {
			throw new UnauthorizedException()
		}
		return true
	}
}
