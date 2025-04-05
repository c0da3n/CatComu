import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/database.module';
import { CatsModule } from './cats/cats.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(`src/env/.${process.env.NODE_ENV}.env`)],
    }),
    DatabaseModule,
    CatsModule,
  ],
})
export class AppModule {}
