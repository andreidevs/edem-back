import { AuthModule } from './../auth/auth.module';
import { GroupModel } from './group.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module, forwardRef } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GroupModel,
        schemaOptions: {
          collection: 'Groups',
        },
      },
    ]),
    AuthModule,
    forwardRef(() => StudentsModule),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule {}
