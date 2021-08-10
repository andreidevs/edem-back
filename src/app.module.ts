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



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    AuthModule,
    RolesModule,
    UserModule,
    GroupsModule,

  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
