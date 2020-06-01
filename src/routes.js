const router = require('express').Router();

const UserController = require('./controllers/UserControllers');

router.get('/users', UserController.index);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;
