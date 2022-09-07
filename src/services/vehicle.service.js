// import { weatherApi } from '../config';

export class VehicleService {
  // #API_KEY = weatherApi.appId;

  constructor({ logger, vehicleModel }) {
    this.logger = logger;
    this.vehicleModel = vehicleModel;
  }

  async getAll() {
    const vehicles = await this.vehicleModel.findAll();

    return vehicles;
  }

  async create(vehicleDto) {
    this.logger.debug({ title: 'create params', vehicleDto });
    const vehicle = await this.vehicleModel.create(vehicleDto);

    return vehicle;
  }
}
