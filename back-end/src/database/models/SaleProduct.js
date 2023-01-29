module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
  {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      references: { model: 'sales', key: 'id'}
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      references: { model: 'products', key: 'id'}
    },
    quantity: DataTypes.INTEGER,
  },
  {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SaleProduct.associate = (models) => {

    models.Sale.belongsToMany(models.Product, {
      as: 'products',
<<<<<<< HEAD
      foreignKey: 'saleId',
      otherKey: 'productId'
=======
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
>>>>>>> 5d6f6e38 (grupo 08 estrutura)
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
<<<<<<< HEAD
      otherKey: 'saleId',
      foreignKey: 'productId',
=======
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
>>>>>>> 5d6f6e38 (grupo 08 estrutura)
    });
  }
  return SaleProduct;
}