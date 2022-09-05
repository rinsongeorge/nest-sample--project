import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStationRequest } from './create-station.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/list')
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }

  @Get('/list/:station/:lounge/:terminal?')
  findOne(
    @Param('station') station: string,
    @Param('lounge') lounge: string,
    @Param('terminal') terminal?: string,
  ): string {
    return `#${station}/${lounge}/${terminal || ''}`;
  }

  @Get('/queries')
  findAllQuery(@Query() query: { [key: string]: string }) {
    return query;
  }

  @Post('/saveStation')
  saveStation(@Body() request: CreateStationRequest): CreateStationRequest {
    return request;
  }

  @Post('/saveStations')
  saveStations(
    @Body(new ParseArrayPipe({ items: CreateStationRequest }))
    requests: CreateStationRequest[],
  ): CreateStationRequest[] {
    return requests;
  }
}
