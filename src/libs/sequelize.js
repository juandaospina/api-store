const { Sequelize } = require("sequelize");
const { URI } = require("../config/connection");
const setupModels = require("../db/models");

const sequelize = new Sequelize(URI, { dialect: "postgres", logging: true });

setupModels(sequelize);

async function stateAuthentication() {
  try {
    await sequelize.authenticate();
    console.log(
      "[sequelize_auth]",
      "Connection has been established successfully."
    );
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
}

module.exports = { sequelize, stateAuthentication };
