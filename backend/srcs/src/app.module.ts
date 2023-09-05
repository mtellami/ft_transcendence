import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './typeorm/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost', // change it to database container name when run on docker
			port: 5432,
			username: 'mtellami',
			password: 'password',
			database: 'tranc',
			entities: [User],
			synchronize: true,
		}),
		UsersModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
