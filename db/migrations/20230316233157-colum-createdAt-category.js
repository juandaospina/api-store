'use strict';

const { SchemaCategory } = require('../../src/db/models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn("categories", "created_at", SchemaCategory.createdAt);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn("categories", SchemaCategory.createdAt);
  }
};
