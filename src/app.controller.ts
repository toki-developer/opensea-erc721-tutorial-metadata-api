import { GetCreatureResponse } from './types/creature';
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/creature/:id')
  getCreature(@Param('id') id: string): GetCreatureResponse {
    return this.appService.getCreature(id);
  }
}
