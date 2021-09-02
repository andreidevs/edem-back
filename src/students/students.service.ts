import { CreatePaymentDto } from './../payments/dto/create-payment.dto';
import { Types } from 'mongoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { StudentModel } from './student.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { differenceInDays, isAfter } from 'date-fns';
import { PaymentsService } from 'src/payments/payments.service';
import { GroupsService } from 'src/groups/groups.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(StudentModel)
    private readonly studentModel: ModelType<StudentModel>,
    private readonly paymentService: PaymentsService,
    private readonly groupService: GroupsService,
  ) {}

  async create(dto: CreateStudentDto) {
    // Single Paid no create and return
    if (dto.single && dto.paid) return { status: 'paid' };

    //If Paid set paid date
    if (dto.paid) dto.paidDate = new Date();

    // Create Student
    const student = await this.studentModel.create(dto);

    // Set student to group
    const group = await this.groupService.setStudentToGroup(
      -1,
      dto.group,
      student._id,
    );

    //  Create Payment
    let paymentCreated;
    if (dto.paid) {
      const type = (await this.groupService.getById(dto.group)).type;
      const payment: CreatePaymentDto = {
        title: '',
        student: student._id.toString(),
        date: new Date(),
        price: dto.subscription,
        coach: dto.user,
        type: type,
      };
      paymentCreated = await this.paymentService.create(payment);
    }

    return { student, paymentCreated, group };
  }

  async getAll(single: boolean) {
    return this.studentModel.find({ single });
  }

  async getAllFromUser(user: Types.ObjectId, single: boolean) {
    return this.studentModel.find({ user, single });
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

  async paid(id: string) {
    const paidDate = new Date();
    return this.studentModel
      .findByIdAndUpdate(id, { paid: true, paidDate }, { new: true })
      .exec();
  }

  async checkAndSetAutoPaid() {
    (await this.studentModel.find({ paid: true })).forEach((el) => {
      if (differenceInDays(new Date(el.paidDate), new Date()) < -30) {
        this.studentModel.findByIdAndUpdate(el._id, { paid: false }).exec();
      }
    });
  }
}
