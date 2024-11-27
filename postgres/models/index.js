const User = require('./User.js');
const Restaurant = require('./Restaurant.js');
const Table = require('./Table.js');
const Order = require('./Order.js');

// Define associations
Restaurant.hasMany(User, { foreignKey: 'restaurant_id' });
User.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Restaurant.hasMany(Table, { foreignKey: 'restaurant_id' });
Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Table.hasMany(Order, { foreignKey: 'table_id' });
Order.belongsTo(Table, { foreignKey: 'table_id' });

// Export all models
module.exports = {
  User,
  Restaurant,
  Table,
  Order,
};
