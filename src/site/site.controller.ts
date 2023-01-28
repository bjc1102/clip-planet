/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Req,
  UseGuards,
  Delete,
  Param,
  Put,
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
  async setOpenGraphClip(@Req() req: Request, @UserDecorator() userInfo: User) {
    const { id, email } = userInfo;
    //@ts-ignore
    const siteURL = req.body.siteURL;

    try {
      if (!siteURL) throw new Error('url 정보가 없습니다.');
      const { ogData, error } = await this.siteService.fetchOpenGraphData(
        siteURL,
      );
      if (!error && ogData.success) {
        const saveResult = await this.siteService.saveUserOpenGraphData(
          ogData,
          siteURL,
          {
            id,
            email,
          },
        );
        return saveResult;
      }
      if (error) throw new Error('open graph 정보를 불러올 수 없습니다.');
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get('get/clips')
  @UseGuards(AuthGuard('jwt'))
  async getUserClipList(@UserDecorator() userInfo: User) {
    const { id, email } = userInfo;

    const clips = await this.siteService.getUserOpenGraphData(id, email);
    return clips;
  }

  @Post('set/extension/clip')
  async setExtensionClip(@Req() req: Request) {
    //@ts-ignore
    const { api_key, siteURL } = req.body;

    try {
      if (!siteURL) throw new Error('url 정보가 없습니다.');
      const { ogData, error } = await this.siteService.fetchOpenGraphData(
        siteURL,
      );
      if (error) throw new Error('url 정보가 없습니다.');

      const user = await this.siteService.findUserByAPI_KEY(api_key);
      if (!user) throw new Error('유저가 없습니다. API 키를 다시 입력해주세요');

      const { ogTitle, ogImage, ogUrl } =
        //@ts-ignore
        await this.siteService.saveUserOpenGraphData(ogData, siteURL, user);

      return {
        ogTitle,
        ogImage,
        ogUrl,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('delete/clip/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteUserClipData(
    @Param('id') clipId: number,
    @UserDecorator() userInfo: User,
  ) {
    const { id, email } = userInfo;

    try {
      await this.siteService.deleteClipData(clipId, { id, email });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Put('update/mark/:id')
  @UseGuards(AuthGuard('jwt'))
  async markUserClipData(
    @Param('id') clipId: number,
    @UserDecorator() userInfo: User,
  ) {
    try {
      const result = await this.siteService.markClipData(clipId, userInfo);
      if (result.affected === 1) return { id: clipId };
      if (result.affected === 0)
        throw new Error('클립 정보를 찾을 수 없습니다.');
      throw new Error('업데이트 중 에러가 발생했습니다.');
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
