import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRoles {
  ADMIN,
  COACH,
}

export class AuthDto {
  @ApiProperty({ example: 'asd@test.ru', description: 'Email' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'password', description: 'Password' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'Name', description: 'Name' })
  @IsString()
  name: string;

  @ApiProperty({
    example: '237fyo23iffiweifj',
    description: 'Присовить роль из модели roles',
  })
  @IsEnum(UserRoles)
  role?: UserRoles;
}
