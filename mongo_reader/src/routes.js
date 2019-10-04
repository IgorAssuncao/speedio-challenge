import { Router } from 'express';

import UserController from './controller/UserController';

const routes = new Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Hello, world' });
});

routes.get('/user', UserController.readPercentagePagesVisited);

export default routes;
