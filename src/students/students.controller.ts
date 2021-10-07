import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Param,
  ParseIntPipe,
  ParseBoolPipe,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { StudentsService } from './students.service';
import { Prisma } from '.prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/decorators/user.decorator';
import { ToBooleanPipe } from 'src/pipes/toBoolean.pipe';
import { ToIntPipe } from 'src/pipes/toInt.pipe';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: Prisma.StudentsUncheckedCreateInput) {
    return this.studentsService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Query('single', ToBooleanPipe) single: boolean,
    @User() user: Prisma.UserUncheckedCreateInput,
  ) {
    if (this.authService.checkRole('ADMIN', user))
      return this.studentsService.getAll(single);

    return this.studentsService.getAllFromUser(user.id, single);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async getFromUser(
    @Query('id', ToIntPipe) id: number,
    @Query('single', ToBooleanPipe) single: boolean,
    @User() user: Prisma.UserUncheckedCreateInput,
  ) {
    let uid: number;

    if (!id) uid = user.id;
    else uid = id;

    return this.studentsService.getAllFromUser(uid, single);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: Prisma.StudentsUncheckedUpdateInput,
  ) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('/paid/:id')
  async paid(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.paid(id);
  }

  @Cron(CronExpression.EVERY_12_HOURS)
  async checkAndSetAutoPaid() {
    this.studentsService.checkAndSetAutoPaid();
  }
}
