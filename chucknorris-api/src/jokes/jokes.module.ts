import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
@Module({
  providers: [JokesService],
  controllers: [JokesController],
})
export class JokesModule {}
