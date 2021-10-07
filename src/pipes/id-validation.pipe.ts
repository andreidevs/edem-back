import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param') {
      return value;
    }
    // if (!Types.ObjectId.isValid(value)) {
    //     throw new BadRequestException('Неверный id')
    // }

    return value;
  }
}
