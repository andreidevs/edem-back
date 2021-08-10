
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User'
        }
      }
    ]),
  ],

  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
