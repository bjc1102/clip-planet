import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteModule } from './site/site.module';
import { User, Site } from './database';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development' ? './.env.dev' : './.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('MYSQL_HOST'),
          username: 'root',
          port: Number(configService.get('DATABASE_PORT')),
          password: configService.get('MYSQL_ROOT_PASSWORD'),
          database: configService.get('MYSQL_DATABASE'),
          entities: [User, Site],
          synchronize: !(configService.get('NODE_ENV') === 'production'),
        };
      },
    }),
    SiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
