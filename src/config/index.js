const {
  PORT,
  MAX_PAGE,
  DB_DIALECT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_POOL_MAX,
  DB_POOL_MIN,
  DB_HOST,
} = process.env;

export default {
  port: PORT || 3000,
  userApiUrl: 'https://reqres.in',
  maxPage: parseInt(MAX_PAGE) || 2,
  brands: ['Fiat', 'Peugeot', 'Audi', 'Jeep'],
};

export const db = {
  dialect: DB_DIALECT || 'mariadb',
  host: DB_HOST || '127.0.0.1',
  database: DB_DATABASE || null,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  pool: {
    max: DB_POOL_MAX || 15,
    min: DB_POOL_MIN || 1,
    acquire: 30000,
    idle: 10000,
  },
};
