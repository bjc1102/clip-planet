/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/sites')
export class SiteController {
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async fetchSite(@Req() req: Request) {
    //@ts-ignore
    console.log(req.user);
    return 'hello';
  }
}
