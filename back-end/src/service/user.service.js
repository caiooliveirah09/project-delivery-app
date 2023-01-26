const { User } = require('../database/models');
const { createToken } = require('../utils/jwt.utils');
const { validatePassword, createHash } = require('../utils/md5utils');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const validateLogin = async (email, senha) => {
  const user = await findUser(email);

  if (!user) return { status: 404, message: { message: 'Not Found' } };

  const result = validatePassword(senha, user.password);
  if (!result) return { status: 401, message: { message: ' Email or Password Incorrect' } };
  const { password, id, ...notPassword } = user.dataValues;

  const token = createToken(notPassword);
  return { status: 200, message: { ...notPassword, token } };
};

const createUser = async (userData) => {
  const { name, email } = userData;
  const userEmail = await findUser(email);
  const userName = await findUser(name);
  
  if (userEmail || userName) {
    return { status: 409, message: 'user already register' };
  }
  
  const hash = createHash(userData.password);
  const newUser = await User.create({ name, email, password: hash, role: 'customer' });
  const { password, id, ...notPassword } = newUser.dataValues;

  const token = createToken(notPassword);
  return { status: 201, message: { ...notPassword, token } };
};

module.exports = {
  findUser,
  validateLogin,
  createUser,
};
