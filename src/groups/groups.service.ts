import { UpdateGroupDto } from './dto/update-group.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GroupModel, GroupTypes } from './group.model';
import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(GroupModel) private readonly groupModel: ModelType<GroupModel>) { }


    async createGroup(dto: CreateGroupDto) {
        return this.groupModel.create(dto)
    }


    async getAll() {
        return await this.groupModel.find().populate('user').exec()
    }


    async getById(id: string) {
        return await this.groupModel.findById(id).populate('user').exec()
    }

    async getByType(type: GroupTypes) {
        return await this.groupModel.find({ type }).populate('user').exec()
    }


    async updateGroup(id: string, dto: CreateGroupDto) {
        return await this.groupModel.findByIdAndUpdate(id, dto, { new: true }).populate('user').exec()
    }

    async deleteGroup(id: string) {
        return await this.groupModel.findByIdAndDelete(id).exec()
    }

}
