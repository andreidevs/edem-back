import { AuthModule } from './../auth/auth.module';
import { AuthService } from './../auth/auth.service';
import { GroupModel } from './group.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GroupModel,
        schemaOptions: {
          collection: 'Groups'
        }
      }
    ]),
    AuthModule
  ],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule { }
