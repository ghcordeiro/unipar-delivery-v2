import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import express from 'express';
import uploadConfig from './upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/files', express.static(uploadConfig.directory))

  await app.listen(3000);
}
bootstrap();
