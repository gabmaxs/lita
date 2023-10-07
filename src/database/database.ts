import { Dialect } from 'sequelize';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelizeDefinition: SequelizeOptions = {
        dialect: (process.env.DB_DIALECT || 'mysql') as Dialect,
        host: process.env.DB_HOST || 'localhost',
        port: +process.env.DB_PORT || 3306,
        username: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
      };
      const sequelize = new Sequelize(sequelizeDefinition);
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
