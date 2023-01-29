const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');

router.get('/sellers', userController.findAllSellers);
router.get('/:id', userController.findUserById);
router.get('/', userController.findUserByEmail);

module.exports = router;
