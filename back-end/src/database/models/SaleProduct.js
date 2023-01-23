function PostCategorySchema (sequelize, DataTypes) {
  const SaleProductTable = sequelize.define('SaleProduct',
  {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      references: { model: 'sales', key: 'id'}
    },
    product_id: {
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

  SaleProductTable.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProductTable,
      as: 'products',
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });

    models.Product.belongsToMany(models.Sale, {
      through: SaleProductTable,
      as: 'sales',
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    });
  }

  return SaleProductTable;

}