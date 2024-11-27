const sequelize = require("sequelize");

const Sequelized = new sequelize("Restaurant DB", "postgres", "postgres7", {
  host: "localhost",
  dialect: "postgres",
});

const connection = async () => {
  try {
    await Sequelized.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = { connection };

// import pkg from "pg";
const pkg = require("pg");

const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres7",
  database: "Restaurant DB",
});

// async function testConnection() {
//   try {
//     // Connecting to the database
//     await client.connect();
//     console.log("Connected to the PostgreSQL database!");

//     // Running a simple query
//     const res = await client.query("SELECT NOW()");
//     console.log("Database time:", res.rows[0]);

//     // Closing the connection to ensure that postgres is connected to node js
//     await client.end();
//   } catch (err) {
//     console.error("Error connecting to the database:", err.message);
//   }
// }
