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
  async setOpenGraph(@Req() req: Request, @UserDecorator() userInfo: User) {
    const { id, email } = userInfo;
    //@ts-ignore
    const siteURL = req.body.siteURL;

    try {
      if (!siteURL) throw new Error('url 정보가 없습니다.');
      const { ogData, error } = await this.siteService.fetchOpenGraphData(
        siteURL,
      );
      if (!error && ogData.success) {
        const { ogTitle, ogImage, ogUrl } =
          await this.siteService.saveUserOpenGraphData(ogData, {
            id,
            email,
          });
        return {
          ogTitle,
          ogImage,
          ogUrl,
        };
      }
      if (error) throw new Error('open graph 정보를 불러올 수 없습니다.');
      return '성공';
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  @Get('get/clips')
  @UseGuards(AuthGuard('jwt'))
  async getUserSite(@UserDecorator() userInfo: User) {
    const { id, email } = userInfo;

    const clips = await this.siteService.getUserOpenGraphData(id, email);
    return clips;
  }

  @Post('set/extension/clip')
  async setExtensionClip(@Req() req: Request) {
    //@ts-ignore
    const { API_KEY, siteURL } = req.body;

    try {
      if (!siteURL) throw new Error('url 정보가 없습니다.');
      const { ogData, error } = await this.siteService.fetchOpenGraphData(
        siteURL,
      );
      const user = await this.siteService.findUserByAPI_KEY(API_KEY);
      if (!user) throw new Error('API_KEY 정보가 없습니다.');
      if (error && !ogData.success) throw new Error('url 정보가 없습니다.');

      const { ogTitle, ogImage, ogUrl } =
        //@ts-ignore
        await this.siteService.saveUserOpenGraphData(ogData, user);

      return {
        ogTitle,
        ogImage,
        ogUrl,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }
}
