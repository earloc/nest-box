import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getValidPingUntyped(content: string) : any {
    return {
      ping: content,
      pong: content.split('').reverse().join('')
    }
  }
}
