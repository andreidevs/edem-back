import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';

const include = {
  user: {
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  },
  group: true,
  indiv: true,
};

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.StudentsUncheckedCreateInput) {
    return this.prisma.students.create({
      data,
      include,
    });
  }

  async getAll(single: boolean) {
    return this.prisma.students.findMany({
      where: { single },
      include,
    });
  }

  async getAllFromUser(userId: number, single: boolean) {
    return this.prisma.students.findMany({
      where: { userId, single },
      include,
    });
  }

  async getById(id: number) {
    return this.prisma.students.findUnique({
      where: { id },
      include,
    });
  }

  async update(id: number, data: Prisma.StudentsUncheckedUpdateInput) {
    return this.prisma.students.update({
      where: { id },
      data,
      include,
    });
  }

  async remove(id: number) {
    return this.prisma.students.delete({
      where: { id },
    });
  }

  async paid(id: number) {}

  async checkAndSetAutoPaid() {}
}
