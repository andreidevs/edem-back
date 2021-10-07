import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ToBoolean implements PipeTransform {
    transform(value: boolean, metadata: ArgumentMetadata): boolean;
}
