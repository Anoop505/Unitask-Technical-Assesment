import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('api/random-joke')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get()
  async getRandomJoke() {
    return await this.jokesService.getRandomJoke();
  }
}
