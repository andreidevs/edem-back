import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ToIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    let result;

    result = parseInt(value);

    if (isNaN(result)) result = null;

    return result;
  }
}
