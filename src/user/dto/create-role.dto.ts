import { ApiProperty } from '@nestjs/swagger';
import { IS_STRING_PROP } from './../../constans/class-validator.constans';
import { IsString } from 'class-validator';

export class CreateRoleDto {

    @ApiProperty({ example: "23trg783928of23hf32f", description: "Id пользователя" })
    @IsString({ message: IS_STRING_PROP })
    userId: string;

    @ApiProperty({ example: "ewufig893o2iflijwf", description: "Id роли" })
    @IsString({ message: IS_STRING_PROP })
    role: string
}