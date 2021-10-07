import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ToIntPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): number;
}
