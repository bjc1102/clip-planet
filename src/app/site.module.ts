import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SiteController } from 'src/app/controller/site.controller';
import { SiteService } from 'src/app/service/site/site.service';
import { PrismaService } from 'src/prisma.service';

//의존성 주입
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SiteController],
  providers: [SiteService, PrismaService],
})
export class SiteModule {}
