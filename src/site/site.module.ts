import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from 'src/database/site.entity';
import { User } from 'src/database/User.entity';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  imports: [TypeOrmModule.forFeature([Site, User])],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
