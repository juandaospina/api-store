'use strict';

const { SchemaOrder } = require('../../src/db/models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("orders", SchemaOrder)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  }
};
