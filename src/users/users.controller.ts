import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '.prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(){
    return this.usersService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: number){
    return this.usersService.getById(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput){
    return this.usersService.update(+id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number){
    return this.usersService.delete(+id)
  }
  


}
