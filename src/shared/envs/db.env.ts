import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbSynchronize: process.env.DB_SYNCHRONIZE === 'true',
  dbLogging: process.env.DB_LOGGING === 'true',
}));
