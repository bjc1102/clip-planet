/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/sites')
@UseGuards(AuthGuard('jwt'))
export class SiteController {
  @Post()
  async fetchSite(@Req() req: Request) {
    //@ts-ignore
    console.log(req.user);
    return 'hello';
  }
}
