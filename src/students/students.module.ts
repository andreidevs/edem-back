import { StudentModel } from './student.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: StudentModel,
        schemaOptions: {
          collection: 'Students'
        }
      }
    ]),

  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule { }
