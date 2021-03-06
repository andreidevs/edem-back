import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { GroupTypes } from '../group.model';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {

    @ApiProperty({ example: "Пн. Ср, Пт 18.00 София", description: "Название группы, создается на фронте , дни недели + время + тренер" })
    @IsString()
    name: string;

    @ApiProperty({ example: "19.00", description: "Время. Справочник на фронте" })
    @IsString()
    time: string;


    @ApiProperty({ example: "id model<UserModel>", description: "User = Тренер который проводит данную группу" })
    @IsString()
    @IsOptional()
    user: string;


    @ApiProperty({ example: "Пн, Ср, Пт", description: "Массив с днями неделями" })
    @IsArray()
    @IsString({ each: true })
    weekDays: string[];


    @ApiProperty({ example: "array of model<StudentModel>", description: "Ученики группы" })
    @IsArray()
    @IsString({ each: true })
    students: Types.ObjectId[];


    @ApiProperty({ example: "10", description: "Кол-во мест в группе" })
    @IsNumber()
    count: number;


    @ApiProperty({ example: "Группа", description: "Тип группы ENUM (Группа, Минигруппа)" })
    @IsEnum(GroupTypes)
    type: GroupTypes;

}