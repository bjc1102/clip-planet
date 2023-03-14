import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const corsOrigin =
    process.env.NODE_ENV === 'local' ? true : [config.get('DOMAIN')];

  app.setGlobalPrefix('api');
  app.enableCors({
    credentials: true,
    origin: corsOrigin,
  });

  await app.listen(config.get('PORT') ? parseInt(config.get('PORT')) : 5000);
}

bootstrap();

// controller -> routing 처리 / return 처리
// module -> 의존성
// service -> 비즈니스 관련 => 실제 로직을 처리한다

// {
//   origin: [
//     'http://localhost:3000',
//     'http://example.com',
//     'http://www.example.com',
//     'http://app.example.com',
//     'https://example.com',
//     'https://www.example.com',
//     'https://app.example.com',
//   ],
//   methods: ['GET', 'POST'],
//   credentials: true,
// }
