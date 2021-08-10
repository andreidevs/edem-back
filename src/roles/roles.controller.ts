import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Controller, Get, Logger, Post, UsePipes, ValidationPipe, Body, NotFoundException, Param } from '@nestjs/common';
import { RolesModel } from './roles.model';


@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private readonly roleService: RolesService) { }


    @ApiOperation({ summary: "Создать роль" })
    @ApiResponse({ status: 201, type: RolesModel })
    @Post('/create')
    async create(@Body() dto: CreateRoleDto) {
        return this.roleService.create(dto)
    }


    @ApiOperation({ summary: "Получить все роли" })
    @Get('/')
    async getAll() {
        return this.roleService.getAll()
    }





}
