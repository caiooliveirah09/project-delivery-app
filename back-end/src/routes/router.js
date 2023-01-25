const express = require('express');

const loginRoute = require('./login.route');
const registerRoute = require('./register.route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);

module.exports = router;
