import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostPingRequest } from './models/PostPingRequest';
import { PostPingResponse } from './models/PostPingResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ping')
  postPing(
    @Body() ping: PostPingRequest
  ): PostPingResponse {
    const pongResult = this.appService.getValidPongResponse(ping.content);

    return pongResult;
  }

  @Get('/ping/invalid-response')
  getPingInvalidResponse(
  ): PostPingResponse {
    const pongResult = this.appService.getInvalidPongResponse();
    // pongResult gets not validated that it conforms to PostPingResponse, lacking output-sanitizing
    return pongResult;
  }
}


