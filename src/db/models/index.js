const { Category, SchemaCategory } = require("./category.model");
const { Customer, CustomerSchema } = require("./customer.model");
const { Order, SchemaOrder } = require("./order.model");
const { Product, SchemaProduct } = require("./product.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelize) {
  User.init(UserSchema, {
    sequelize,
    tableName: "users",
    modelName: "User",
  });

  Customer.init(CustomerSchema, {
    sequelize,
    tableName: "customers",
    modelName: "Customer",
  });

  Category.init(SchemaCategory, {
    sequelize,
    tableName: "categories",
    modelName: "Category",
  });

  Product.init(SchemaProduct, {
    sequelize,
    tableName: "products",
    modelName: "Product",
  });

  Order.init(SchemaOrder, {
    sequelize,
    tableName: "orders",
    modelName: "Order"
  });

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
