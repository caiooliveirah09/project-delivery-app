const { ConsoleMessage } = require('puppeteer');
const { User } = require('../database/models');
const {validatePassword} = require('../utils/md5utils')

const findUser = async (email) => {
  const user = await User.findOne({ where: { email }});

  return user;
}


const validateLogin = async (email, password) => {
  const user = await findUser(email);

  if (!user) return { status: 404, message: { message: 'Not Found' }};

  const result = validatePassword(password, user.password)
  if(!result) return { status: 401, message: { message: ' Email or Passwor Incorrect' }}
  return { status: 200, message: user };
}



module.exports = {
  findUser,
  validateLogin 
}