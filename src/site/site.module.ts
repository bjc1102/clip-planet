import { Module } from '@nestjs/common';
import { SiteController } from 'src/site/controller/site.controller';
import { SiteService } from 'src/site/service/site.service';
import { PrismaService } from 'src/prisma.service';

//의존성 주입
@Module({
  controllers: [SiteController],
  providers: [SiteService, PrismaService],
})
export class SiteModule {}
