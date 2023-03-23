'use strict';

const { UserSchema } = require('../../src/db/models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "role", UserSchema.role);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("users", "role", UserSchema.role);
  },
};
