import { getMongoConfig } from './configs/mongo.config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { RolesModule } from './roles/roles.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { GroupsModule } from './groups/groups.module';
import { DailyModule } from './daily/daily.module';
import { StudentsModule } from './students/students.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    RolesModule,
    UserModule,
    GroupsModule,
    DailyModule,
    StudentsModule,
    PaymentsModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
