import { DataSource } from 'typeorm';
import { Products } from './Entities/Products';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async() => { 
  const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Products],
    synchronize: false,
  });

  await dataSource.initialize();
  console.log('data source initialized');
};
