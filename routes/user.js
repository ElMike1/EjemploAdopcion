const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validations/userValidator');
const jwtValidator = require('../validations/jwtValidator');

router.post('/login', /*userValidator.id, */usersController.getLogin);
router.get('/user', jwtValidator.validateToken, userValidator.id, usersController.getUser);
router.get('/users', jwtValidator.validateToken, usersController.getUsers);
router.post('/user', userValidator.add, usersController.postUser);
router.put('/user', userValidator.update, usersController.putUser);
router.delete('/user', userValidator.id, usersController.deleteUser);

module.exports = router;