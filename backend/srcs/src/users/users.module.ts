import { Module } from '@nestjs/common';
import { ContollersController } from './contollers/contollers.controller';
import { ServicesService } from './services/services.service';

@Module({
  controllers: [ContollersController],
  providers: [ServicesService]
})
export class UsersModule {}
