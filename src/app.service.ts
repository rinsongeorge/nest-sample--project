import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ppp!';
  }

  getHelloWorld(): any {
    return { msg: 'Hello World' };
  }
}
