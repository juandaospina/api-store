'use strict';

const { UserSchema } = require('../../src/db/models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("users", UserSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable();
  }
};
