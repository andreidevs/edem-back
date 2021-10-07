import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { GroupTypes } from './group.types';

const include = {
  hall: true,
  user: {
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  },
  typeWorkout: true,
};

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.GroupsUncheckedCreateInput) {
    return this.prisma.groups.create({
      data,
      include,
    });
  }

  async getAll() {
    return this.prisma.groups.findMany({
      include,
    });
  }

  async getById(id: number) {
    return this.prisma.groups.findUnique({
      where: { id },
      include,
    });
  }

  async getByType(type: GroupTypes) {
    return this.prisma.groups.findMany({
      where: { type },
      include,
    });
  }

  async getByTypeFromUser(type: GroupTypes, userId: number) {
    return this.prisma.groups.findMany({
      where: { type, userId },
      include,
    });
  }

  async update(data: Prisma.GroupsUpdateInput, id: number) {
    return this.prisma.groups.update({
      data,
      where: { id },
      include,
    });
  }

  async delete(id: number){
    return this.prisma.groups.delete({
      where: {id}
    })
  }
}
