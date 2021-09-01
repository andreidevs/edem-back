import { CreateRoleDto } from './dto/create-role.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Injectable, UsePipes } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
  ) {}

  async setRole(dto: CreateRoleDto) {
    return await this.userModel.findOneAndUpdate(
      { _id: dto.userId },

      { $addToSet: { roles: dto.role } },

      { returnOriginal: false },
    );
  }

  async getAllUsers() {
    return await this.userModel.find();
  }

  async getUserById(id: string) {
    return await this.userModel.findById(id);
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
