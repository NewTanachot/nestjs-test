import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { say : 'Hello World!', head : "say something", main : "heloo mather fucker" };
  }
}
