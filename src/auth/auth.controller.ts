import { ALREADY_REGISTERED_ERROR } from './auth.constans';
import { AuthService } from './auth.service';
import { BadRequestException, Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from '../user/user.model';

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @ApiOperation({ summary: "Регистрация пользователя" })
    @ApiResponse({ status: 200, type: UserModel })
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const oldUser = await this.authService.findUser(dto.login)
        if (oldUser) {
            throw new BadRequestException(ALREADY_REGISTERED_ERROR)
        }

        return this.authService.createUSer(dto)
    }


    @ApiOperation({ summary: "Вход" })
    @HttpCode(200)
    @Post('login')
    async login(@Body() { login, password }: AuthDto) {
        const { email } = await this.authService.validateUser(login, password)
        return this.authService.login(email);
    }
}
