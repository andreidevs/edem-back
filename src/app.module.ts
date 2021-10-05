import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { StudentsModule } from './students/students.module';
import { PaymentsModule } from './payments/payments.module';
import { DayliModule } from './dayli/dayli.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, GroupsModule, StudentsModule, PaymentsModule, DayliModule],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: PrismaClientExceptionFilter,
  }, AppService,  ],
})
export class AppModule {}
