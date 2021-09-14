import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('games')
  getAllGames() {
    return this.appService.getAllGames();
  }

  @Get('games/:id')
  game(id: string) {
    return this.appService.getGame(id);
  }
}
