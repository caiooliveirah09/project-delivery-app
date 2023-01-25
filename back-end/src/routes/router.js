const express = require('express');

const loginRoute = require('./login.route');
const productsRoute = require('./products.route');
const validateTokenRoute = require('./validateToken.route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/products', productsRoute);
router.use('/validateToken', validateTokenRoute);

module.exports = router;