import Router from 'express-promise-router';
import { createValidator } from 'express-joi-validation';
import { methodNotAllowed } from '../utils/problem.util';
import { container, setup } from '../container';
import { postVehicleSchema } from '../validation.schema';

setup();
const personController = container.resolve('personController');
const vehicleController = container.resolve('vehicleController');

const router = Router();
const validator = createValidator({ passError: true });

router.route('/persons').get(personController.getAll).all(methodNotAllowed);
router
  .route('/vehicles')
  .get(vehicleController.get)
  .post(validator.body(postVehicleSchema), vehicleController.store)
  .all(methodNotAllowed);

export default router;
