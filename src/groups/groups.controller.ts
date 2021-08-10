import { ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';
import { Controller, Get, Post, Put } from '@nestjs/common';


@ApiTags('Группы')
@Controller('groups')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) { }

    @Get('/')
    async getAllGroups() {

    }

    @Get('/:id')
    async getById() {

    }

    @Get('/getByType/:id')
    async getByType(id: string) {

    }


    @Post('/')
    async createGroup(dto: CreateGroupDto) {

    }


    @Put('/')
    async updateGroup(dto: CreateGroupDto) {

    }




}
