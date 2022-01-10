import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): JSON {
    return JSON.parse(this.appService.getTest());
  }

  @Get('/bundle/:mfeName')
  getBundle(@Param('mfeName') mfeName: string): Promise<string>
  {
    // console.log('controller', 'getBundle');
    // console.log('mfeName', mfeName);
    return this.appService.getBundle(mfeName).then(response => response).catch(error => error.message as string);
  }
}
