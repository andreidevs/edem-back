import { Module } from '@nestjs/common';
import { DayliService } from './dayli.service';
import { DayliController } from './dayli.controller';

@Module({
  controllers: [DayliController],
  providers: [DayliService],
})
export class DayliModule {}
