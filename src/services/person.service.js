import config from '../config';

export class PersonService {
  constructor({ logger, reqresClient }) {
    this.logger = logger;
    this.reqresClient = reqresClient;
  }

  async findAll() {
    const results = await Promise.allSettled(
      Array.from({ length: config.maxPage }, (_, i) => i + 1).map((value) =>
        this.reqresClient.get(`${config.userApiUrl}/api/users?page=${value}`),
      ),
    );
    let persons = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        const {
          data: { data: info },
        } = result.value;
        persons = persons.concat(info);
      } else {
        this.logger.warn(result.value);
      }
    });

    return persons;
  }
}
