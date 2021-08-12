import { UpdateGroupDto } from './dto/update-group.dto';
import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { AuthService } from './../auth/auth.service';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';
import { Body, Controller, Get, Post, Put, UseGuards, Logger, Req, Param, BadRequestException, Patch, Delete } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { GroupTypes } from './group.model';


@ApiTags('Группы')
@Controller('groups')
export class GroupsController {

    constructor(private readonly groupService: GroupsService,
        private readonly authService: AuthService) { }


    @Get('/')
    async getAllGroups() {
        return this.groupService.getAll()
    }


    @Get('/:id')
    async getById(@Param('id', IdValidationPipe) id: string) {
        return this.groupService.getById(id)
    }


    @Get('/getByType/:type')
    async getByType(@Param('type') type: GroupTypes) {
        if (Object.values(GroupTypes).includes(type)) {
            return this.groupService.getByType(type)
        } else {
            return new BadRequestException('Не верный тип группы')
        }

    }

    @UseGuards(JwtAuthGuard)
    @Post('/')
    async createGroup(@Body() dto: CreateGroupDto, @User() user: string) {
        const userId = await this.authService.findUser(user)
        dto.user = userId.id;
        return this.groupService.createGroup(dto)
    }


    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateGroup(@Param('id', IdValidationPipe) id: string, @Body() dto: CreateGroupDto) {
        return this.groupService.updateGroup(id, dto)
    }


    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteGroup(@Param('id', IdValidationPipe) id: string) {
        return this.groupService.deleteGroup(id)
    }




}
