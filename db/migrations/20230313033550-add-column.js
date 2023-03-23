"use strict";

const { CustomerSchema } = require("../../src/db/models/customer.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("customers", "updated_at", CustomerSchema.updatedAt);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("customers", "updated_at", CustomerSchema.updatedAt);
  },
};
