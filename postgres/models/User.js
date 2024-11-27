import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'staff' }, // e.g., 'manager' or 'staff'
  restaurant_id: { type: DataTypes.INTEGER, allowNull: false }, // Foreign Key for Restaurant
}, {
  timestamps: true, // adds created_at and updated_at automatically
});

export default User;
