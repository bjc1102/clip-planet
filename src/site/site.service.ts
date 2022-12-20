import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as ogs from 'open-graph-scraper';
import { Site } from 'src/database/site.entity';
import { User } from 'src/database/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site) private readonly siteRepository: Repository<Site>,
  ) {}

  async getOpenGraphData(url: string, userInfo: Partial<User>) {
    const options = { url };

    return ogs(options).then(async (data) => {
      const { error, result } = data;

      if (!error && result.success) {
        const { ogTitle, ogUrl, ogImage } = result;

        const ogResult = this.siteRepository.create({
          ogTitle: ogTitle,
          ogUrl: ogUrl,
          ogImage: ogImage['url'],
          user: userInfo,
        });

        return await this.siteRepository.save(ogResult);
      }

      return error;
    });
  }
}
