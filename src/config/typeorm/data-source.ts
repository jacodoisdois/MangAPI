import { DataSource, DataSourceOptions } from "typeorm";
import config from './typeormconfig.json'
import dotenv from 'dotenv';
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
    type: "mysql",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ...config
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource