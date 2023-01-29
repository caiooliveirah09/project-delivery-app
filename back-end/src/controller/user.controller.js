const userService = require('../service/user.service');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  const { status, message } = await userService.validateLogin(email, password);

  return res.status(status).json(message);
};

const createUser = async (req, res) => {
  const { status, message } = await userService.createUser(req.body);

  return res.status(status).json(message);
};

const findAllSellers = async (req, res) => {
  const { status, message } = await userService.findAllSellers();

  return res.status(status).json(message);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.findUserById(id);
  return res.status(status).json(message);
};

const findUserByEmail = async (req, res) => {
  const { email } = req.body;
  const user = await userService.findUser(email);
  return res.status(200).json(user);
};

module.exports = {
  validateLogin,
  createUser,
  findAllSellers,
  findUserById,
  findUserByEmail,
};
