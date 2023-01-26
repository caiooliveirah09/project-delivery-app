const express = require('express');

const loginRoute = require('./login.route');
const productsRoute = require('./products.route');
const validateTokenRoute = require('./validateToken.route');
const registerRoute = require('./register.route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/products', productsRoute);
router.use('/validateToken', validateTokenRoute);
router.use('/register', registerRoute);

module.exports = router;
