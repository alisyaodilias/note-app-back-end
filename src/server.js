import Hapi from '@hapi/hapi';
import routes from './routes';
 
 
const init = async () => {
  const server = _server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.routes
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();