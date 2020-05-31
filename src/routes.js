const router = require('express').Router();

const UserController = require('./controllers/UserControllers');

router.get('/users', UserController.users);

module.exports = router;
