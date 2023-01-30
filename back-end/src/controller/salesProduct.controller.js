const salesProductService = require('../service/salesProduct.service');

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesProductService.getOrderById(Number(id));
  return res.status(status).json(message);
};

const updateOrderStatusById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await salesProductService.updateOrderStatusById(Number(id), status);
  return res.status(204).json(order);
};

module.exports = {
  getOrderById,
  updateOrderStatusById,
};
