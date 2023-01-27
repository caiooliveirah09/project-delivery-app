const salesService = require('../service/sales.service');

const createSale = async (req, res) => {
  const { status, message } = await salesService.createSale(req.body);
  return res.status(status).json(message);
};

module.exports = {
  createSale,
};
