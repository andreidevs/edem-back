import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateRoleDto {

    @ApiProperty({ example: "Admin", description: "Название роли" })
    @IsString()
    name: string;

    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @IsString()
    description: string;
}