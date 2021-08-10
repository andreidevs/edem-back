import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AuthDto {

    @ApiProperty({ example: "asd@test.ru", description: "Email" })
    @IsString()
    login: string;

    @ApiProperty({ example: "password", description: "Password" })
    @IsString()
    password: string;

    @ApiProperty({ example: "237fyo23iffiweifj", description: "Присовить роль из модели roles" })
    @IsString()
    role?: string;
}