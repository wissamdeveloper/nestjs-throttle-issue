import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

const PORT = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  app.enableCors(); // For CORS, checkout github.com/gitdagray/mongo_async_crud/blob/main/config/allowedOrigins.js

  await app.listen(PORT);
}
bootstrap();
