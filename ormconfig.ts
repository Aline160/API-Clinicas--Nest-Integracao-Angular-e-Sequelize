/* eslint-disable prettier/prettier */
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Users } from 'src/common/entities';

const config: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  autoLoadModels: true,
  synchronize: true,

  models: [Users],
  port: 5432,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  define:{timestamps: false,}
};

export default config;