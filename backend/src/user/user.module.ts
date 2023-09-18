import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from 'src/services/jwt.service';

@Module({
	controllers: [UserController],
  providers: [UserService, PrismaService, JwtService]
})
export class UserModule {}
