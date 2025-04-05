import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swagger } from './swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT', 3000);
  const NODE_ENV = config.get<string>('NODE_ENV', 'production');

  if (NODE_ENV === 'development') {
    await swagger(app);
    Logger.log(
      `Swagger is running on: http://localhost:${port}/api`,
      'Swagger',
    );
  }
  await app.listen(port);
  Logger.log(`Server is running on: http://localhost:${port}`, 'Bootstrap');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    credentials: true,
  });
}
bootstrap();
