"use strict";

const { SchemaProduct } = require("../../src/db/models/product.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(
      "products",
      "created_at",
      SchemaProduct.createdAt
    );
    await queryInterface.addColumn(
      "products",
      "updated_at",
      SchemaProduct.updatedAt
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("products", "created_at");
    await queryInterface.removeColumn("products", "updated_at");
  },
};
