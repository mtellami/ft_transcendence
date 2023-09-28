import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
	app.use(cookieParser())
	app.useGlobalPipes(
    new ValidationPipe({
			// disableErrorMessages: true,
      transform: true,
    }),
  );
	app.enableCors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
  await app.listen(3000);
}

bootstrap();
