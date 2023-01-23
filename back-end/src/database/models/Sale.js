module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAdress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      references: { model: 'users', key: 'id'}
    },
    sellerId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      references: { model: 'users', key: 'id'}
    },
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  }

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' })
  }
}