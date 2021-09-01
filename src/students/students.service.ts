import { Types } from 'mongoose';
import { GroupsService } from './../groups/groups.service';
import { GroupModel } from './../groups/group.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { StudentModel } from './student.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(StudentModel)
    private readonly studentModel: ModelType<StudentModel>,

    private readonly groupService: GroupsService,
  ) {}

  async create(dto: CreateStudentDto) {
    const student = await this.studentModel.create(dto);

    const group = await this.groupService.setCount(-1, dto.group, student._id);

    return { student, group };
  }

  async getAll() {
    return this.studentModel.find();
  }

  async getAllFromUser(user: Types.ObjectId) {
    return this.studentModel.find({ user });
  }

  async getById(id: string) {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, dto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
