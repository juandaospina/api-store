"use strict";

const { DataTypes } = require('sequelize');
const { Customer } = require('../../src/db/models/customer.model');
const { SchemaOrder } = require('../../src/db/models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("orders", "customer_id", SchemaOrder.customerId)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("orders", "customer_id")
  },
};
