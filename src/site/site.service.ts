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
    siteURL: string,
    { id, email }: Partial<User>,
  ) {
    const { ogTitle, ogImage } = ogData;
    //중복 데이터 관리 -> 중복이 있으면 저장하지않고 단순히 데이터를 리턴한다.

    const ogResult = this.siteRepository.create({
      ogTitle: ogTitle ?? '',
      ogUrl: siteURL ?? '',
      ogImage: ogImage['url'] ?? '',
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

  async findUserByAPI_KEY(API_KEY: string) {
    return await this.userRepository.findOneBy({ api_key: API_KEY });
  }
}
