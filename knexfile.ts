import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORT),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'admin',
      password: '123456',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORT),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;
