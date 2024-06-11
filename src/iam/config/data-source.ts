import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions = {
  type: 'sqlite',
  database: 'dev.sqlite',
  entities: ['/**/*.entities.ts'],
  synchronize: false,
  logging: true,
} as DataSourceOptions;

export default new DataSource(dataSourceOptions);
