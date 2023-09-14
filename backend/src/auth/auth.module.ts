import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { JwtService } from 'src/jwt/jwt.service';

@Module({
	imports: [ UserModule],
	controllers: [AuthController],
	providers: [AuthService, UserService, JwtService]
})

export class AuthModule {}
