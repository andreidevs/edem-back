import { GroupModel } from '../groups/group.model';
import { UserModel } from 'src/user/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface StudentModel extends Base {}
export class StudentModel extends TimeStamps {
  @ApiProperty({ example: 'Ксения Борисовна', description: 'Имя ученика' })
  @prop({ required: true })
  name: string;

  @ApiProperty({
    example: 'id model<UserModel>',
    description: 'User = Тренер который проводит тренировку',
  })
  @prop({ ref: () => UserModel })
  user: Ref<UserModel>;

  @ApiProperty({ example: '+7777777777', description: 'Телефон' })
  @prop({ required: true })
  phone: string;

  @ApiProperty({
    example: 'id model<GroupModel>',
    description: 'Группа в которой занимается ученик',
  })
  @prop({ ref: () => GroupModel, required: true })
  group: Ref<GroupModel>;

  @ApiProperty({
    example: 'true',
    description: 'В этом месяца занятие уже оплачено',
  })
  @prop({ default: false })
  paid: boolean;

  @ApiProperty({ example: 'Date auto', description: 'Дата последней оплаты' })
  @prop({ default: null })
  paidDate: Date;

  @ApiProperty({ example: '12000', description: 'Стоимость абонимента' })
  @prop()
  subscription: number;

  @ApiProperty({ example: 'false', description: 'Разовое занятие' })
  @prop({ default: false })
  single: boolean;

  @ApiProperty({ example: 'false', description: 'Активный' })
  @prop({ default: true })
  active: boolean;
}
