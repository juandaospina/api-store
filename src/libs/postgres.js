const { Client, Pool } = require("pg");
const {
  config: { dbHost, dbName, dbPassword, dbPort, dbUser },
} = require("../config/config");

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

// const config = {
//   host: "localhost",
//   port: 5432,
//   user: "",
//   password: "",
//   database: "",
// };

// const getConnection = async () => {
//   const client = new Client(config);
//   await client.connect();
//   return client;
// };

// const pool = new Pool(config);
// or
// const pool = new Pool({connectionString: URI})

// module.exports = { getConnection, pool };
// module.exports = { pool }
