import { AuthService } from './../auth/auth.service';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { GroupsService } from './groups.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  Logger,
  Req,
  Param,
  BadRequestException,
  Patch,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { Prisma } from '.prisma/client';
import { GroupTypes } from './group.types';

@ApiTags('Группы')
@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupService: GroupsService,
    private readonly authService: AuthService,
  ) {}

  @Get('/')
  async getAllGroups() {
    return this.groupService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.groupService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getByType/:type')
  async getByType(
    @Param('type') type: GroupTypes,
    @User() user: Prisma.UserUncheckedCreateInput,
  ) {
    if (Object.values(GroupTypes).includes(type)) {
      if (this.authService.checkRole('ADMIN', user))
        return this.groupService.getByType(type);
      const userid = user.id;
      return this.groupService.getByTypeFromUser(type, userid);
    } else {
      return new BadRequestException('Не верный тип группы');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async create(
    @Body() dto: Prisma.GroupsUncheckedCreateInput,
    @User() user: Prisma.UserUncheckedCreateInput,
  ) {
    dto.userId = user.id;
    return this.groupService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateGroup(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.GroupsUpdateInput,
  ) {
    return this.groupService.update(dto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteGroup(@Param('id', ParseIntPipe) id: number) {
    return this.groupService.delete(id);
  }
}
