import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ToBooleanPipe implements PipeTransform {
  transform(value: boolean, metadata: ArgumentMetadata) {
    if (!value) {
      value = false;
    } else {
      value = true;
    }

    return value;
  }
}
