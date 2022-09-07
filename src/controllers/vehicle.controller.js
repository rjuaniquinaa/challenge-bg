import { BindBaseController } from './bind-base.controller';

export class VehicleController extends BindBaseController {
  constructor({ vehicleService }) {
    super();

    this.vehicleService = vehicleService;
  }

  async get(req, res) {
    const vehicles = await this.vehicleService.getAll();

    res.json({ vehicles });
  }

  async store(req, res) {
    const { body: vehicleDto } = req;
    const vehicle = await this.vehicleService.create(vehicleDto);

    res.status(201).json(vehicle);
  }
}
