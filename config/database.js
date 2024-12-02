const { Sequelize } = require("sequelize");

// new Sequelize instance for PostgreSQL
const sequelize = new Sequelize("Restaurant DB", "postgres", "postgres7", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Set to true if you want to see raw SQL queries
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDatabase();

module.exports = { sequelize };
