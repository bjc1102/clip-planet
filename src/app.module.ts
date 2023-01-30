import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './database/User.entity';
import { SiteModule } from './site/site.module';
import { Site } from './database/Site.entity';

console.log(process.env.DATABASE_NAME);

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      port: Number(process.env.DATABASE_PORT),
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Site],
      synchronize: true,
    }),
    SiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
