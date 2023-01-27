const express = require('express');

const jwtUtils = require('../utils/jwt.utils');
const loginRoute = require('./login.route');
const productsRoute = require('./products.route');
const registerRoute = require('./register.route');
const adminRoute = require('./admin.route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/products', productsRoute);
router.use('/register', registerRoute);
router.use('/admin', jwtUtils.validateTokenMiddleware, adminRoute);

module.exports = router;
