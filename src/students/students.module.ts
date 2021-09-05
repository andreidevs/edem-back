import { PaymentsModule } from './../payments/payments.module';
import { AuthModule } from './../auth/auth.module';
import { StudentModel } from './student.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { forwardRef, Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { GroupsModule } from 'src/groups/groups.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: StudentModel,
        schemaOptions: {
          collection: 'Students',
        },
      },
    ]),
    AuthModule,
    PaymentsModule,
    forwardRef(() => GroupsModule),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
