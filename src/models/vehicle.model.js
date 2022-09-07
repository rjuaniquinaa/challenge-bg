import { DataTypes, Model } from 'sequelize';
import { getConnection } from '.';

const sequelize = getConnection();

export class Vehicle extends Model { }

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numberPlate: {
      type: DataTypes.STRING,
      validate: { len: 8 },
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: 'Vehicle',
  },
);
