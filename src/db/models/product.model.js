const { Sequelize, Model, DataTypes } = require("sequelize");
const { URI } = require("../../config/connection");
const { Category } = require("./category.model");

// const sequelize = new Sequelize(URI, { dialect: "postgres" });

const SchemaProduct = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
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
  categoryId: {
    field: "category_id",
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: Category,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, {
      as: "category",
    });
  }
}

module.exports = {
  SchemaProduct,
  Product,
};
