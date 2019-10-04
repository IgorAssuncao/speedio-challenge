import { Router } from 'express';

import MessagesController from './app/controllers/MessagesController';

const routes = new Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Hello, world' });
});

routes.post('/messages', MessagesController.store);

export default routes;
