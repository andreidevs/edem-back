import { IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePaymentDto {
  @ApiProperty({ example: 'Название', description: 'Оплата 12345' })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Ref<StudentModel>',
    description: 'Студент оплативший занятие',
  })
  @IsString()
  student?: string;

  @ApiProperty({ example: 'Ref<GroupModel>', description: 'Группа' })
  @IsString()
  group?: string;

  @ApiProperty({
    example: 'new Date()',
    required: true,
    description: 'Дата оплаты',
  })
  @IsDate()
  date: Date;

  @ApiProperty({ example: '8000', required: true, description: 'Стоимость' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'Ref<UserModel>', description: 'Тренер' })
  @IsString()
  coach?: string;

  @ApiProperty({
    example: 'group, single, mini, indiv',
    description: 'Тип оплаты',
  })
  @IsString()
  type: string;
}
