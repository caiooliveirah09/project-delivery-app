const userService = require("../service/user.service")

const findUser = async (req, res) => {
  const { email } = req.body;

  const { status, message } = await userService.findUser(email);
  return res.status(status).json(message);
}

module.exports = {
  findUser,
}