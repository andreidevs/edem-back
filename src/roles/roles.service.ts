import { UserModel } from 'src/user/user.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { RolesModel } from './roles.model';
import { Types } from 'mongoose';

@Injectable()
export class RolesService {
    constructor(@InjectModel(RolesModel) private readonly rolesModel: ModelType<RolesModel>) { }

    async create(dto: CreateRoleDto): Promise<DocumentType<RolesModel>> {
        return this.rolesModel.create(dto)
    }


    async getAll() {
        return this.rolesModel.find().exec()
    }



}
