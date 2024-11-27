import User from './User.js';
import Restaurant from './Restaurant.js';
import Table from './Table.js';
import Order from './Order.js';

// Define associations
Restaurant.hasMany(User, { foreignKey: 'restaurant_id' });
User.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Restaurant.hasMany(Table, { foreignKey: 'restaurant_id' });
Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Table.hasMany(Order, { foreignKey: 'table_id' });
Order.belongsTo(Table, { foreignKey: 'table_id' });

// Export all models
export { User, Restaurant, Table, Order };
