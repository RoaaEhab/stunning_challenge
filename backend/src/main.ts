import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('MONGO_URI in main.ts:', process.env.MONGO_URI); // Debug
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:3001' });
  await app.listen(3000);
}
bootstrap();