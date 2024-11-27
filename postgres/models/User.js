// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database.js");

const User = sequelize.define(
  "user",
  {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "staff" },
    // restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "users", // Explicitly define table name
    timestamps: true, // automatically add created_at and updated_at
  }
);

module.exports = { User };
