import * as Joi from 'joi';
import config from './config';

export const postVehicleSchema = Joi.object({
  numberPlate: Joi.string().min(8).required(),
  brand: Joi.string()
    .valid(...config.brands)
    .required(),
  model: Joi.string().required(),
  doors: Joi.number().positive().required(),
});
