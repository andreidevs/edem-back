import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { UserModel } from 'src/user/user.model';

export interface GroupsModel extends Base { }
export class GroupsModel extends TimeStamps {

    @ApiProperty({ example: "Admin", description: "Название роли" })
    @prop()
    name: string;

    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @prop()
    time: string;


    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @prop({ ref: () => UserModel, type: () => UserModel })
    user: Ref<UserModel>


    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @prop({ type: () => [String] })
    weekDays: string[];


    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @prop({ type: () => [Types.ObjectId] })
    students: Types.ObjectId[];



}
