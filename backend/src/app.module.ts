import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionsModule } from './sections/sections.module';

console.log('MONGO_URI in app.module.ts:', process.env.MONGO_URI); // Debug
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined in .env');
}

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}