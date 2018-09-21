import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './common/auth.middleware';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const auth = new AuthMiddleware().resolve();

  server.post('/items', auth);
  server.post('/shopping-cart', auth);

  const app = await NestFactory.create(AppModule, server);
  await app.listen(3000);
}

bootstrap().catch(err => new Error(err.message || 'An error occurred!'));
