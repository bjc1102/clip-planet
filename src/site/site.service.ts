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

  async fetchOpenGraphData(url: string) {
    const options = { url };

    return ogs(options).then(async (data) => {
      const { error, result: ogData } = data;

      return { ogData, error };
    });
  }

  async saveUserOpenGraphData(
    ogData: ogs.SuccessResult['result'],
    { id, email }: Partial<User>,
  ) {
    const { ogTitle, ogImage, ogUrl } = ogData;

    const ogResult = this.siteRepository.create({
      ogTitle: ogTitle,
      ogUrl: ogUrl,
      ogImage: ogImage['url'],
      user: { id, email },
    });

    return this.siteRepository.save(ogResult);
  }

  async getUserOpenGraphData(id: number, email: string) {
    return await this.siteRepository.findBy({
      user: {
        id,
        email,
      },
    });
  }
}
