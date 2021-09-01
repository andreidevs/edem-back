import { UserModel } from './../user/user.model';
import { UpdateGroupDto } from './dto/update-group.dto';
import { IdValidationPipe } from './../pipes/id-validation.pipe';
import { AuthService } from './../auth/auth.service';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from './dto/create-group.dto';
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
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { GroupTypes } from './group.model';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Группы')
@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupService: GroupsService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getAllGroups() {
    return this.groupService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', IdValidationPipe) id: string) {
    return this.groupService.getById(id);
  }

  @Get('/getByType/:type')
  async getByType(@Param('type') type: GroupTypes) {
    if (Object.values(GroupTypes).includes(type)) {
      return this.groupService.getByType(type);
    } else {
      return new BadRequestException('Не верный тип группы');
    }
  }

  @Get('/getByTypeFromUser/:type/:userid')
  async getByTypeFromUser(
    @Param('type') type: GroupTypes,
    @Param('userid', IdValidationPipe) userid: string,
  ) {
    if (Object.values(GroupTypes).includes(type)) {
      return this.groupService.getByTypeFromUser(type, userid);
    } else {
      return new BadRequestException('Не верный тип группы');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  // @Roles('coach')
  // @UseGuards(RolesGuard)
  async createGroup(@Body() dto: CreateGroupDto, @User() user: UserModel) {
    dto.user = user.id;
    return this.groupService.createGroup(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateGroup(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: CreateGroupDto,
  ) {
    return this.groupService.updateGroup(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteGroup(@Param('id', IdValidationPipe) id: string) {
    return this.groupService.deleteGroup(id);
  }
}
