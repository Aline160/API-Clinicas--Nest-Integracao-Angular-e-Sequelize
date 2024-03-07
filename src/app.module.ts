/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DataAccessModule } from './data-access/data-access.module';
import { DistributionModule } from './distribution/distribution.module';
import { BusinessModule } from './business/business.module';

import { LocalStrategy } from './common/auth/local.strategy';
import { SequelizeModule } from '@nestjs/sequelize';
import config from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['prod.env', '.env'],
    }),
    BusinessModule,
    DataAccessModule,
    DistributionModule,
    SequelizeModule.forRoot(config)
  ],
  controllers: [],
  providers: [LocalStrategy],
})
export class AppModule {}
