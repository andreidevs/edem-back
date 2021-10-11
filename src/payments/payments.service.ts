import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';

const include = {
  hall: true,
  coach: {
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  },
  group: true,
  indiv: true
};

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService){}

  async create(data: Prisma.PaymentsUncheckedCreateInput){
    return this.prisma.payments.create({
      data,
      include
    })
  }

  async findAll(){
    return this.prisma.payments.findMany({
      include
    })
  }

  async findOne(id: number){
    return this.prisma.payments.findUnique({
      where: {id},
      include
    })
  }


  async update(id: number, data: Prisma.PaymentsUncheckedUpdateInput){
    return this.prisma.payments.update({
      where: {id},
      data,
      include
    })
  }


  async remove(id: number){
    return this.prisma.payments.delete({
      where: {id}
    })
  }


}
