const { Product, Sale } = require('../database/models');

const getOrderById = async (id) => {
  const order = await Sale.findAll({
    where: { id },
    include: { model: Product, as: 'products', through: { attributes: ['quantity'] } },
  });

  return { status: 200, message: order };
};

const updateOrderStatusById = async (id, status) => {
  const update = await Sale.update({ status }, { where: { id } });
  return update;
};

module.exports = {
  getOrderById,
  updateOrderStatusById,
};