import { ModelType } from '@typegoose/typegoose/lib/types';
import { PaymentModel } from './payment.model';
import { InjectModel } from 'nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(PaymentModel)
    private readonly paymentModel: ModelType<PaymentModel>,
  ) {}

  async create(dto: CreatePaymentDto) {
    return this.paymentModel.create(dto);
  }

  async findAll() {
    return this.paymentModel.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
