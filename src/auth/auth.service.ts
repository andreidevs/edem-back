import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { USER_NOT_FOUND, WRONG_PASSWORD_ERROR } from './auth.constans';
import { UserModel } from '../user/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AuthDto } from './dto/auth.dto';
import { Injectable, Param, Post, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      email: dto.login,
      name: dto.name,
      passwordHash: await hash(dto.password, salt),
      roles: dto.role !== undefined ? [dto.role] : [],
    });

    return newUser.save();
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(email: string, password: string) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND);
    }

    const isCorrectPassword = await compare(password, user.passwordHash);

    if (!isCorrectPassword) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }
}
