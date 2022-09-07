import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import axios from 'axios';
import { PersonController } from './controllers/person.controller';
import { VehicleController } from './controllers/vehicle.controller';
import { PersonService } from './services/person.service';
import { VehicleService } from './services/vehicle.service';
import { Vehicle } from './models/vehicle.model';
import logger from './pino.setup';
import config from './config';

export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

export const setup = () => {
  container
    //CONTROLLERS
    .register({
      personController: asClass(PersonController),
      vehicleController: asClass(VehicleController),
    })
    //SERVICES
    .register({
      personService: asClass(PersonService),
      vehicleService: asClass(VehicleService),
      logger: asValue(logger.logger),
      reqresClient: asValue(axios.create({ baseURL: config.userApiUrl })),
    })
    // MODELS
    .register({
      vehicleModel: asValue(Vehicle),
    });
};
