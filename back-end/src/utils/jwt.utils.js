const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign(data, 'secret_key', {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = (token) => {
  const data = jwt.verify(token, 'secret_key');
  return data;
};

module.exports = { createToken, validateToken };
