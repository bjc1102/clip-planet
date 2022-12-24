import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as ogs from 'open-graph-scraper';
import { Site } from 'src/database/site.entity';
import { User } from 'src/database/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async setOpenGraphData(url: string, userInfo: Partial<User>) {
    const options = { url };

    return ogs(options).then(async (data) => {
      const { error, result: ogData } = data;

      if (!error && ogData.success) {
        const { ogTitle, ogUrl, ogImage } = ogData;

        const ogResult = this.siteRepository.create({
          ogTitle: ogTitle,
          ogUrl: ogUrl,
          ogImage: ogImage['url'],
          user: userInfo,
        });
        const result = await this.siteRepository.save(ogResult);

        return { result, error };
      }

      return { result: ogData, error };
    });
  }
  async getOpenGraphData(id: number, email: string) {
    return await this.siteRepository.findBy({
      user: {
        id,
        email,
      },
    });
  }
}
