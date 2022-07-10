const { config } = require('dotenv');
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const migrateDir = NODE_ENV === 'production' ? 'dist/databases/migrations' : 'src/databases/migrations';
const seedDir = NODE_ENV === 'production' ? 'dist/databases/seeds' : 'src/databases/seeds';

export = {
  client: 'pg',
  connection: {
    charset: 'utf8',
    timezone: 'UTC',
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  },
  migrations: {
    directory: migrateDir,
    tableName: 'migrations',
    // stub: 'src/databases/stubs',
  },
  seeds: {
    directory: seedDir,
    // stub: 'src/databases/stubs',
  },
};
