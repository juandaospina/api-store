const { Sequelize, Model, DataTypes } = require("sequelize");

const SchemaCategory = {
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
  createdAt: {
    field: "created_at",
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: "updated_at",
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: "products",
      foreignKey: "categoryId" 
    });
  }
}

module.exports = {
  SchemaCategory,
  Category,
};
