import { Router } from 'express';

import MessageController from './controllers/MessageController';

const routes = new Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Hello, world' });
});

routes.get('/messages', MessageController.readAndSave);

export default routes;
