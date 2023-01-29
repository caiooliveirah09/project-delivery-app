const salesProductService = require('../service/salesProduct.service');

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesProductService.getOrderById(Number(id));
  return res.status(status).json(message);
};

module.exports = {
  getOrderById,
};
