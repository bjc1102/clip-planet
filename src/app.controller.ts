import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:5000/hello가 된다
// localhost:5000/api
@Controller('api') // controller에 hello를 넣으면?
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return 'postHello';
  }

  @Put()
  putHello(): string {
    return 'putHello';
  }

  @Delete()
  delHello(): string {
    return 'delHello';
  }
}
