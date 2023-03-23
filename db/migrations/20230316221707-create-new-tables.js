'use strict';

const { SchemaCategory } = require('../../src/db/models/category.model');
const { SchemaProduct } = require('../../src/db/models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("categories", SchemaCategory);
    await queryInterface.createTable("products", SchemaProduct)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
    await queryInterface.dropTable("products");
  }
};
