const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.get('/:name', userController.getUser);

router.put('/:name', userController.updateUser);

module.exports = router;
