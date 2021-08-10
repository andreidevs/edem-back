import { CreateRoleDto } from './dto/create-role.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Injectable, UsePipes } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) { }


    async setRole(dto: CreateRoleDto) {
        const roleArray = new Array(new Types.ObjectId(dto.role))
        return this.userModel.findOneAndUpdate(
            { _id: dto.userId },


            { $addToSet: { roles: new Types.ObjectId(dto.role) } },


            { returnOriginal: false }
        )
    }


    async getAllUsers() {
        return this.userModel.aggregate([{
            $lookup:
            {
                from: 'Roles',  // Название коллекции
                localField: 'roles', // Какое поле берем из основнйо коллекции
                foreignField: '_id', // По какому находим 
                as: 'roles' // Куда записываем
            }
        }])

    }

    async getUserById(id: string) {
        return this.userModel.aggregate(
            [
                { $match: { _id: new Types.ObjectId(id) } },
                {


                    $lookup:
                    {
                        from: 'Roles',  // Название коллекции
                        localField: 'roles', // Какое поле берем из основнйо коллекции
                        foreignField: '_id', // По какому находим 
                        as: 'roles' // Куда записываем
                    }
                }
            ]
        )
    }
}
