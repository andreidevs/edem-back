import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiProperty } from '@nestjs/swagger';
import { plugin, prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { RolesModel } from 'src/roles/roles.model';
import { Type } from 'class-transformer';

export interface UserModel extends Base { }
export class UserModel extends TimeStamps {

    @ApiProperty({ example: "asd@test.ru", description: "Email" })
    @prop({ unique: true })
    email: string;

    @ApiProperty({ example: "password", description: "Password" })
    @prop()
    passwordHash: string;


    @prop({ ref: 'RolesModel' })
    roles: Ref<RolesModel>[]

}
