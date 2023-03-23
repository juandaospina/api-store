"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("customers", "user_id", {
      field: "user_id",
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable();
  },
};
