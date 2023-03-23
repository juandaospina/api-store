const {
  config: { dbUser, dbPassword, dbHost, dbPort, dbName },
} = require("./config");

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

// const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

module.exports = { URI }