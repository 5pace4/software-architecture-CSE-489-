const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

// router.get('/:name', userController.getUser);
router.get('/:id', userController.getUserById);

// router.put('/:name', userController.updateUser);

// router.delete('/:name', userController.deleteUser);
router.delete('/:id', userController.deleteUserById);

router.patch('/:id', userController.updateUser2);

module.exports = router;
