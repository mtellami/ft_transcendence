import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ConfigModule.forRoot(),
		UserModule,
		AuthModule,
		MulterModule.register({
			dest: './avatars',
		})
	],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
