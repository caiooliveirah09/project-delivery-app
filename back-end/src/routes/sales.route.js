const express = require('express');

const router = express.Router();

const salesController = require('../controller/sales.controller');

router.post('/', salesController.createSale);

module.exports = router;
