import { RolesModel } from './roles.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: RolesModel,
        schemaOptions: {
          collection: 'Roles'
        }
      }
    ])
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule { }
