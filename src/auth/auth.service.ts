// import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { USER_NOT_FOUND, WRONG_PASSWORD_ERROR } from './auth.constans';
import { Injectable, Param, Post, UnauthorizedException } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/decorators/user.decorator';
import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: dto,
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  checkRole(role: string, user: Prisma.UserUncheckedCreateInput): Boolean {
    if (role === user.role) return true;
    else return false;
  }
}
