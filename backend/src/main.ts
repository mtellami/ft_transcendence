import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
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
