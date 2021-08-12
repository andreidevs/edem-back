import { StudentModel } from '../students/student.model';
import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { UserModel } from 'src/user/user.model';

export enum GroupTypes {
    Group = "Группа",
    Mini = "Минигруппа"
}
export interface GroupModel extends Base { }
export class GroupModel extends TimeStamps {

    @ApiProperty({ example: "Пн. Ср, Пт 18.00 София", description: "Название группы, создается на фронте , дни недели + время + тренер" })
    @prop()
    name: string;

    @ApiProperty({ example: "19.00", description: "Время. Справочник на фронте" })
    @prop()
    time: string;


    @ApiProperty({ example: "id model<UserModel>", description: "User = Тренер который проводит данную группу" })
    @prop({ ref: () => UserModel })
    user: Ref<UserModel>


    @ApiProperty({ example: "Пн, Ср, Пт", description: "Массив с днями неделями" })
    @prop({ type: () => [String] })
    weekDays: string[];


    @ApiProperty({ example: "array of model<StudentModel>", description: "Ученики группы" })
    @prop({ ref: () => StudentModel })
    students: Ref<StudentModel>[]


    @ApiProperty({ example: "10", description: "Кол-во мест в группе" })
    @prop({ default: 12 })
    count: number;


    @ApiProperty({ example: "Группа", description: "Тип группы ENUM (Группа, Минигруппа)" })
    @prop({ enum: GroupTypes })
    type: GroupTypes;



}
