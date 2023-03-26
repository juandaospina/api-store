const { DataTypes } = require("sequelize");

const SchemaOrderProduct = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
};

class OrderProduct extends Model {}

module.exports = {
  SchemaOrderProduct,
  OrderProduct,
};
