'use strict';

const { CustomerSchema } = require('../../src/db/models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("customers", "updatedAt", CustomerSchema);
  }
};
