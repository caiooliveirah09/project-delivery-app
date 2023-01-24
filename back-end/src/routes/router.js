const express =  require('express');

const loginRoute = require('./login.route');

const router = express.Router();

router.use('/login', loginRoute)

module.exports = router;