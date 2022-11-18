import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(5000);
}

bootstrap();

// controller -> routing 처리 / return 처리
// module -> 의존성
// service -> 비즈니스 관련 => 실제 로직을 처리한다
