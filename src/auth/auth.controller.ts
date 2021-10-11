import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { Prisma } from '.prisma/client';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() { name, email, password }: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.authService.create({
      name,
      email,
      password: hashedPassword,
    });

    delete user.password;

    return user;
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() { email, password }: Prisma.UserCreateInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    delete user.password;

    const jwt = await this.jwtService.signAsync(user);

    response.cookie(process.env.JWT_COOKIE_NAME, jwt, { httpOnly: true });

    return {
      message: 'success',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies[process.env.JWT_COOKIE_NAME];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.authService.findById(data['id']);

      const { password, ...result } = user;

      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @HttpCode(200)
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie(process.env.JWT_COOKIE_NAME);

    return {
      message: 'success',
    };
  }


  @Post('clearDatabse')
  async clearDatabase(){
    return this.authService.clearDataBase()
  }
}
