import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost', // change it to database container name when run on docker
			port: 5432,
			username: 'mtellami',
			password: 'password',
			database: 'tranc',
			entities: [],
			synchronize: true,
		}),
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
