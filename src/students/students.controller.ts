import { Types } from 'mongoose';
import { UserModel } from './../user/user.model';
import { AuthService } from './../auth/auth.service';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Ученики групп')
@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@User() u: string) {
    // const user = await this.authService.findUser(u);

    return this.studentsService.getAll();

    // return this.studentsService.getAllFromUser(user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async getFromUser(@User() user: UserModel) {
    return this.studentsService.getAllFromUser(new Types.ObjectId(user.id));
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id', IdValidationPipe) id: string) {
    return this.studentsService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', IdValidationPipe) id: string) {
    return this.studentsService.remove(id);
  }
}
