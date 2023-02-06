const salesService = require('../service/sales.service');

const createSale = async (req, res) => {
  const { status, message } = await salesService.createSale(req.body);
  return res.status(status).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesService.getSale(id);
  return res.status(status).json(message);
};

const getAllSales = async (_req, res) => {
  const { status, message } = await salesService.getAllSales();
  return res.status(status).json(message);
};

const getUserOrders = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesService.getUserOrders(id);
  return res.status(status).json(message);  
};

const getSellerOrders = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await salesService.getSellerOrders(id);
  return res.status(status).json(message);
}

module.exports = {
  createSale,
  getSale,
  getAllSales,
  getUserOrders,
  getSellerOrders
};
