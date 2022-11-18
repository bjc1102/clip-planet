import { Body, Controller, Get, Post } from '@nestjs/common';
import { SiteService } from 'src/app/service/site/site.service';

@Controller('/sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  async getSiteOG(@Body() data: { url: string }) {
    this.siteService.getOpenGraphData(data.url);
  }

  @Get()
  async getReturnTest() {
    return 'consoles';
  }

  // @Get()
  // async fetchAllTodos(): Promise<Site[]> {
  //   return this.siteService.fetchAllSite();
  // }
  // @Get(':id')
  // async fetchSite(@Param('id') id: number): Promise<Site | null> {
  //   return this.siteService.fetchSite(id);
  // }

  // @Delete(':id')
  // async DeleteSite(@Param('id') id: number): Promise<Site> {
  //   return this.siteService.deleteSite(id);
  // }

  // @Post()
  // async addSite(@Body() data: Site): Promise<Site> {
  //   return this.siteService.addSite(data);
  // }

  // @Put(':id')
  // async updateSite(@Param('id') id: number, @Body() data: Site): Promise<Site> {
  //   return this.siteService.updateSite(id, data.title, data.content, data.done);
  // }
}
