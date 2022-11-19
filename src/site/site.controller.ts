import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/sites')
@UseGuards(AuthGuard('jwt'))
export class SiteController {
  @Get()
  async fetchSite() {
    return 'hello';
  }
}
