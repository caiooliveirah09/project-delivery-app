const express = require('express');

const router = express.Router();

const salesController = require('../controller/sales.controller');

router.post('/', salesController.createSale);
router.get('/:id', salesController.getSale);
router.get('/', salesController.getAllSales);
router.get('/customer/:id', salesController.getUserOrders);
router.get('/seller/:id', salesController.getSellerOrders);

module.exports = router;
