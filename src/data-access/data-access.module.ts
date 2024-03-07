/* eslint-disable prettier/prettier */
import { UsersProviders } from './../common/providers/users.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Users } from 'src/common/entities';
import { Clinic } from 'src/common/entities/template-nest/clinics.entity';


@Module({
  imports: [SequelizeModule.forFeature([Users]), SequelizeModule.forFeature([Clinic])],
  exports: [SequelizeModule],
  providers: [...UsersProviders],
})
export class DataAccessModule { }
