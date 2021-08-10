import { ApiProperty } from '@nestjs/swagger';

import { plugin, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';



export interface RolesModel extends Base { }

export class RolesModel extends TimeStamps {

    @ApiProperty({ example: "Admin", description: "Название роли" })
    @prop()
    name: string;

    @ApiProperty({ example: "Main admin", description: "Описание роли" })
    @prop()
    description: string;

}
