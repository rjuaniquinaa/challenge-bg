import config from './config';
import app from './app';
import { getConnection } from './models';

// const mysqlConnection = async () => {
//   console.log('pepepepsjsjsjs', process.env.MARIADB_USER);
//   console.log('mmsmsmsmsms', process.env.MYSQL_USER);
//   const sequelize = new Sequelize('bg', 'pepe', 'hola', {
//     host: 'db',
//     dialect: 'mariadb',
//     // logging: false,
//   });
//};
const sequelize = getConnection();
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión a base de datos mysql establecida');
//   } catch (error) {
//     console.log(
//       'Ocurrió un error al conectarse a la base de datos de mysql',
//       error,
//     );
//   }
// })();

app.listen(config.port, async () => {
  await sequelize.sync({ force: true });
  console.log(`I'm ready, let's rock! (pid: ${process.pid})`);
});
