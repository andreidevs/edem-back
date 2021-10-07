import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ToBooleanPipe implements PipeTransform {
    transform(value: boolean, metadata: ArgumentMetadata): boolean;
}
