import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { JwtService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
	imports: [ UserModule],
	controllers: [AuthController],
	providers: [AuthService, UserService, JwtService, PrismaService]
})

export class AuthModule {}
