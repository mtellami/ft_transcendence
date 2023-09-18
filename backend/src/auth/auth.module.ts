import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtService, PrismaService]
})

export class AuthModule {}
