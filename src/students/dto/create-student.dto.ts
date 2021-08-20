import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, isBoolean, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
    @ApiProperty({ example: "Ксения Борисовна", description: "Имя ученика" })
    @IsString()
    name: string;


    @ApiProperty({ example: "id model<UserModel>", description: "User = Тренер который проводит тренировку" })
    @IsString()
    user: string;


    @ApiProperty({ example: "+7777777777", description: "Телефон" })
    @IsString()
    phone: string;


    @ApiProperty({ example: "id model<GroupModel>", description: "Группа в которой занимается ученик" })
    @IsString()
    group: string;


    @ApiProperty({ example: "true", description: "В этом месяца занятие уже оплачено" })
    @IsBoolean()
    paid: boolean;


    @ApiProperty({ example: "12000", description: "Стоимость абонимента" })
    @IsNumber()
    subscription: number;


    @ApiProperty({ example: "false", description: "Разовое занятие" })
    @IsBoolean()
    single: boolean;


}
