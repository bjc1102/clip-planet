/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/User.entity';
import { UserDecorator } from 'src/types/user.decorator';
import { SiteService } from './site.service';

// api/sites
@Controller('/sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async fetchSite(@Req() req: Request, @UserDecorator() userInfo: User) {
    const { id, email } = userInfo;
    //@ts-ignore
    const siteURL = req.body.siteURL;

    try {
      if (!siteURL) throw new Error('url을 찾을 수 없습니다.');
      console.log(
        await this.siteService.getOpenGraphData(siteURL, { id, email }),
      );
      return 'hello';
    } catch (error) {
      return error;
    }
  }
}
