const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Table = sequelize.define('Table', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'free' }, // 'free', 'occupied', 'reserved'
  restaurant_id: { type: DataTypes.INTEGER, allowNull: false }, // Foreign Key for Restaurant
}, {
  timestamps: true, // adds created_at and updated_at automatically
});

module.exports = Table;
