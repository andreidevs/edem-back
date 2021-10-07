import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';

const SelectedFields = {
  id: true,
  name: true,
  email: true,
  role: true,
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany({
      select: SelectedFields,
    });
  }

  async getById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: SelectedFields,
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: SelectedFields,
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
