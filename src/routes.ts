const router = require('express').Router();

import UserController from './controllers/UserController';
import ProjectController from './controllers/ProjectController';

router
  // Users Routes
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)

  // Projects Routes
  .get('/projects', ProjectController.index)
  .post('/projects', ProjectController.create)

export default router;
