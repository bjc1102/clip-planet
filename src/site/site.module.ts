import { Module } from '@nestjs/common';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  imports: [],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
