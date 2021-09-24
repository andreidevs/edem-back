import { Types } from 'mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GroupModel, GroupTypes } from './group.model';
import {
  Injectable,
  Body,
  BadGatewayException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { StudentsService } from 'src/students/students.service';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(GroupModel) private readonly groupModel: ModelType<GroupModel>,
    @Inject(forwardRef(() => StudentsService))
    private readonly studentService: StudentsService,
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
    return this.groupModel
      .aggregate([
        {
          $match: {
            type: type,
          },
        },
        {
          $lookup: {
            from: 'Students',
            localField: 'group',
            foreignField: 'students',
           
            as: 'students',
          }
        },
        {
          $lookup: {
            from: 'User',
            localField: 'id',
            foreignField: 'user',
            as: 'user',
          },
        },
      ])
      .exec();
  }

  async getByTypeFromUser(type: GroupTypes, userid: string) {
    return this.groupModel
      .aggregate([
        {
          $match: {
            type: type,
            user: userid,
          },
        },
        {
          $sort: { _id: 1 },
        },
        // {
        //   $lookup: {
        //     from: 'Students',
        //     localField: 'id',
        //     foreignField: 'students',
        //     as: 'students',
        //   },
        // },
        {
          $lookup: {
            from: 'User',
            localField: 'id',
            foreignField: 'user',
            as: 'user',
          },
        },
      ])
      .exec();
  }

  async updateGroup(id: string, dto: CreateGroupDto) {
    return this.groupModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate('user')
      .exec();
  }

  async deleteGroup(id: string) {
    const group = await this.groupModel.findById(id).exec();
    const students = group.students.map((el) => el.toString());

    await this.studentService.deleteMany(students);
    group.remove();
    return { status: 'ok' };
  }

  async setStudentToGroup(id: string, student: Types.ObjectId) {
    const up = await this.groupModel
      .findByIdAndUpdate(
        id,
        {
          $inc: { count: -1 },
          $addToSet: { students: student },
        },
        { new: true },
      )
      .exec();

    return up;
  }

  async removeStudentToGroup(id: string, student: Types.ObjectId) {
    const up = await this.groupModel
      .findByIdAndUpdate(
        id,
        {
          $inc: { count: 1 },
          $pull: { students: { $in: student } },
        },
        { new: true },
      )
      .exec();

    return up;
  }
}
