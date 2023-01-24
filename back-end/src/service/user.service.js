const { User } = require('../database/models');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email }});
  if (!user) return { status: 404, message: { message: 'nao sei' }};
  return { status: 200, message: user };
}

module.exports = {
  findUser,
}