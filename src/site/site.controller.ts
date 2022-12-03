/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SiteService } from './site.service';

// api/sites
@Controller('/sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async fetchSite(@Req() req: Request) {
    //@ts-ignore
    const siteURL = req.body.siteURL;

    this.siteService.getOpenGraphData(siteURL);

    return 'hello';
  }
}
