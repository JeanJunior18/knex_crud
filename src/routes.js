const router = require('express').Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

router
  // Users Routes
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)

  // Projects Routes
  .get('/projects', ProjectController.index)
  .post('/projects', ProjectController.create)

module.exports = router;
