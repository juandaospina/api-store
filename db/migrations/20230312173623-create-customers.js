'use strict';

const { CustomerSchema } = require('../../src/db/models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("customers", CustomerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("customers");
  }
};
