import { UserRoles } from './../user.model';
import { ApiProperty } from '@nestjs/swagger';
import { IS_STRING_PROP } from './../../constans/class-validator.constans';
import { IsString, IsEnum } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: '23trg783928of23hf32f',
    description: 'Id пользователя',
  })
  @IsString({ message: IS_STRING_PROP })
  userId: string;

  @ApiProperty({ example: 'admin', description: 'Нзвание роли admin coach' })
  @IsEnum(UserRoles)
  role: UserRoles;
}
