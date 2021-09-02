import { UserModel } from './../user/user.model';
import { StudentModel } from './../students/student.model';
import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { GroupModel } from 'src/groups/group.model';

export interface PaymentModel extends Base {}
export class PaymentModel extends TimeStamps {
  @ApiProperty({ example: 'Название', description: 'Оплата 12345' })
  @prop()
  title: string;

  @ApiProperty({
    example: 'Ref<StudentModel>',
    description: 'Студент оплативший занятие',
  })
  @prop({ ref: () => StudentModel })
  student?: Ref<StudentModel>;

  @ApiProperty({ example: 'Ref<GroupModel>', description: 'Группа' })
  @prop({ ref: () => GroupModel })
  group?: Ref<GroupModel>;

  @ApiProperty({
    example: 'new Date()',
    required: true,
    description: 'Дата оплаты',
  })
  @prop({ required: true })
  date: Date;

  @ApiProperty({ example: '8000', required: true, description: 'Стоимость' })
  @prop({ required: true })
  price: number;

  @ApiProperty({ example: 'Ref<UserModel>', description: 'Тренер' })
  @prop({ ref: () => UserModel })
  coach?: Ref<UserModel>;

  @ApiProperty({
    example: 'group, single, mini, indiv',
    description: 'Тип оплаты',
  })
  @prop({ default: 'group' })
  type: string;
}
