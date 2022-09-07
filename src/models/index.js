import { Sequelize } from 'sequelize';
import { db } from '../config';

let connection;

export const getConnection = () => {
  if (!connection) {
    connection = new Sequelize(db);
  }

  return connection;
};
