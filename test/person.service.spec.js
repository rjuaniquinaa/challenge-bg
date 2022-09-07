import { PersonService } from '../src/services/person.service';
import logger from './../src/pino.setup';

describe('PersonService', () => {
  const reqresClient = { get: jest.fn() };
  const service = new PersonService({
    logger: logger.logger,
    reqresClient,
  });

  describe('getAll', () => {
    it('returns current persons', async () => {
      const personMock = {
        data: {
          data: [
            {
              id: 1,
              numberPlate: 'AC425SKQ',
              brand: 'Jeep',
              model: 'renegade',
              doors: 5,
            },
          ],
        },
      };

      reqresClient.get.mockResolvedValue(personMock);
      const persons = await service.findAll();

      expect(persons.length).toBe(2);
      expect(persons[0]).toMatchObject({
        id: expect.anything(),
        numberPlate: expect.anything(),
        brand: expect.anything(),
        doors: expect.anything(),
      });
      expect(reqresClient.get).toHaveBeenCalledTimes(2);
    });
  });
});
