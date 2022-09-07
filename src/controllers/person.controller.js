import { BindBaseController } from './bind-base.controller';

export class PersonController extends BindBaseController {
  constructor({ personService }) {
    super();

    this.personService = personService;
  }

  async getAll(req, res) {
    const persons = await this.personService.findAll()
    res.json({ persons });
  }
}
