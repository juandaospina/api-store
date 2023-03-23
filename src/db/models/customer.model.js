const { Sequelize, Model, DataTypes } = require("sequelize");

const { User } = require("./user.model");

const CustomerSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    field: "created_at",
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: "updated_at",
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  },
  userId: {
    field: "user_id",
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    references: {
      model: User,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: "user",
      // foreignKey: "userId",
    });
  }
}

module.exports = {
  Customer,
  CustomerSchema,
};
