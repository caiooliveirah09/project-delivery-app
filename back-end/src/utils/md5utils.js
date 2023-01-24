const md5 = require("md5");

function validatePassword(passA, passB) {
  return md5(passA) === passB;
}

module.exports = {
  validatePassword,
};
