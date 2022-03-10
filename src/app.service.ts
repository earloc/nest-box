import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getValidPongResponse(content: string) : any {
    return {
      ping: content,
      pong: content?.split('').reverse().join('')
    }
  }

  getInvalidPongResponse() : any{
    return {
      Ping: 'Ping property mismatching expected naming-convention',
      Pong: {
        Value: 'Pong property mismatching expected naming-convention and structure'
      }
    }
  }
}
