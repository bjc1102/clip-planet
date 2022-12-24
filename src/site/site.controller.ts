/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/User.entity';
import { UserDecorator } from 'src/types/user.decorator';
import { SiteService } from './site.service';

// api/sites
@Controller('/sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post('set/clip')
  @UseGuards(AuthGuard('jwt'))
  async fetchSite(@Req() req: Request, @UserDecorator() userInfo: User) {
    const { id, email } = userInfo;
    //@ts-ignore
    const siteURL = req.body.siteURL;

    try {
      if (!siteURL) throw new Error('url 정보가 없습니다.');
      const { result, error } = await this.siteService.setOpenGraphData(
        siteURL,
        { id, email },
      );
      if (error) throw new Error('open graph 정보를 불러올 수 없습니다.');
      return {
        ogTitle: result['ogTitle'],
        ogUrl: result['ogUrl'],
        ogImage: result['ogImage'],
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  @Get('get/clips')
  @UseGuards(AuthGuard('jwt'))
  async getUserSite(@UserDecorator() userInfo: User) {
    const { id, email } = userInfo;

    const clips = await this.siteService.getOpenGraphData(id, email);
    return clips;
  }
}
