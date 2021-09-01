import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum UserRoles {
  ADMIN = 'admin',
  COACH = 'coach',
}

export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
  @ApiProperty({ example: 'asd@test.ru', description: 'Email' })
  @prop({ unique: true })
  email: string;

  @ApiProperty({ example: 'София', description: 'Имя тренера' })
  @prop()
  name: string;

  @ApiProperty({ example: 'password', description: 'Password' })
  @prop()
  passwordHash: string;

  @prop({ enum: UserRoles, type: String })
  roles: UserRoles[];
}
