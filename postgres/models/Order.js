import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' }, // 'pending', 'completed'
  table_id: { type: DataTypes.INTEGER, allowNull: false }, // Foreign Key for Table
}, {
  timestamps: true, // adds created_at and updated_at automatically
});

export default Order;
