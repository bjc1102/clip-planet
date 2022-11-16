import { Injectable } from '@nestjs/common';

//실제 db데이터 처리 로직 처리등을 service 폴더에서 수행한다
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
