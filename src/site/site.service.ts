import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';

@Injectable()
export class SiteService {
  // constructor() {}

  async getOpenGraphData(url: string) {
    const options = { url };
    ogs(options, function (error, result) {
      console.log(result);
    });
  }
}
