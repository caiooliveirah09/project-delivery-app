const { Sale, SaleProduct, Product } = require('../database/models');

const createSale = async (body) => {
  const { totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
    userId,
    sellerId,
    cart } = body;

  const sale = await Sale.create({ totalPrice: Number(totalPrice.toString().replace(',', '.')),
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
      userId,
      sellerId });

  const cartMap = cart
  .map((product) => ({ saleId: sale.id, productId: product.id, quantity: product.quantity }));

  await SaleProduct.bulkCreate(cartMap);
  
  return { status: 201, message: sale };
};

const getSale = async (id) => {
  const sale = await Sale
    .findOne({
      where: { id },
      include: [{ model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
  return { status: 200, message: sale };
};

const getAllSales = async () => {
  const products = await Sale.findAll();
  return { status: 200, message: products };
};

const getUserOrders = async (id) => {
  const orders = await Sale.findAll({ where: { userId: id } });
  return { status: 200, message: orders };
};

module.exports = {
  createSale,
  getSale,
  getAllSales,
  getUserOrders,
};
