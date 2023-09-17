import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from 'src/services/jwt.service';
import { UserController } from './user.controller';

@Module({
	controllers: [UserController],
  providers: [UserService, JwtService]
})
export class UserModule {}
