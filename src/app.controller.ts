import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('tes')
  getSapa(): string {
    return this.appService.getSapa();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}