const express = require('express');

const router = express.Router();

const salesProductController = require('../controller/salesProduct.controller');

router.get('/:id', salesProductController.getOrderById);

module.exports = router;
