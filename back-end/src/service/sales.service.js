const { Sale, SaleProduct } = require('../database/models');

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

module.exports = {
  createSale,
};