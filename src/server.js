import config from './config';
import app from './app';
import { getConnection } from './models';

const sequelize = getConnection();

app.listen(config.port, async () => {
  await sequelize.sync(/*{ force: true }*/);
  console.log(`I'm ready, let's rock! (pid: ${process.pid})`);
});
