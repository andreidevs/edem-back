import { Controller } from '@nestjs/common';
import { DayliService } from './dayli.service';

@Controller('dayli')
export class DayliController {
  constructor(private readonly dayliService: DayliService) {}
}
