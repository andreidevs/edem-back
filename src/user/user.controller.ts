import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { Controller, forwardRef, Get, Inject, NotFoundException, Param, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@ApiTags('Модель пользователя')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiOperation({ summary: "Добавить роль пользователю" })
    @Post("/setRole")
    async setRole(@Body() dto: CreateRoleDto) {
        const user = await this.userService.setRole(dto)
        if (!user) {
            throw new NotFoundException('Пользователь или роль не найдена')
        }
        return user;
    }


    @ApiOperation({ summary: "Получить всех пользователей" })
    @Get('/users')
    async getAllUsers() {
        return this.userService.getAllUsers()
    }



    @ApiOperation({ summary: "Получить пользователя по id" })
    @Get(':id')
    async getUserById(@Param('id', IdValidationPipe) id: string) {
        const user = await this.userService.getUserById(id)
        if (!user) {
            throw new NotFoundException('Пользователь не найден')
        }
        return user;
    }
}
