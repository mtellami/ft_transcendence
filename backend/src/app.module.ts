import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ConfigModule.forRoot(),
		UserModule,
		AuthModule,
		MulterModule.register({
			dest: './avatars',
		}),
		ChatModule
	],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
