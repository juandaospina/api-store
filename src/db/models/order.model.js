const { Sequelize, Model, DataTypes } = require("sequelize");

const { Customer } = require("./customer.model");

const SchemaOrder = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    defaultValue: "pending",
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    field: "created_at",
    defaultValue: new Date(),
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: "updated_at",
    defaultValue: new Date(),
    type: DataTypes.DATE,
  },
  customerId: {
    field: "customer_id",
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: "customers",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: "customer",
    });
  }
}

module.exports = {
  SchemaOrder,
  Order,
};
