const userService = require('../service/user.service');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  const { status, message } = await userService.validateLogin(email, password);

  return res.status(status).json(message);
};

module.exports = {
  validateLogin,
};
