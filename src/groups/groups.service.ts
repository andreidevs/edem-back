import { Types } from 'mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GroupModel, GroupTypes } from './group.model';
import { Injectable, Body, BadGatewayException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(GroupModel) private readonly groupModel: ModelType<GroupModel>,
  ) {}

  async createGroup(dto: CreateGroupDto) {
    return this.groupModel.create(dto);
  }

  async getAll() {
    return this.groupModel.find().populate('user').exec();
  }

  async getById(id: string) {
    return this.groupModel.findById(id).populate('user').exec();
  }

  async getByType(type: GroupTypes) {
    return this.groupModel.find({ type }).populate('user').exec();
  }

  async getByTypeFromUser(type: GroupTypes, userid: string) {
    return this.groupModel.find({ type, user: userid }).populate('user').exec();
  }

  async updateGroup(id: string, dto: CreateGroupDto) {
    return this.groupModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate('user')
      .exec();
  }

  async deleteGroup(id: string) {
    return this.groupModel.findByIdAndDelete(id).exec();
  }

  async setStudentToGroup(val: number, id: string, student: Types.ObjectId) {
    const up = await this.groupModel
      .findByIdAndUpdate(
        id,
        {
          $inc: { count: val },
          $addToSet: { students: student },
        },
        { new: true },
      )
      .exec();

    return up;
  }
}
