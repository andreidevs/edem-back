import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';


@ApiTags('Ученики групп')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  getAll() {
    return this.studentsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', IdValidationPipe) id: string) {
    return this.studentsService.getById(id);
  }

  @Patch(':id')
  update(@Param('id', IdValidationPipe) id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string) {
    return this.studentsService.remove(id);
  }
}
