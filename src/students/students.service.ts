import { ModelType } from '@typegoose/typegoose/lib/types';
import { StudentModel } from './student.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(StudentModel) private readonly studentModel: ModelType<StudentModel>) { }

  async create(createStudentDto: CreateStudentDto) {
    return this.studentModel.create(createStudentDto)
  }


  async getAll() {
    return this.studentModel.find()
  }

  async getById(id: string) {
    return this.studentModel.findById(id).exec()
  }

  async update(id: string, dto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, dto, { new: true }).exec()
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec()
  }



}
