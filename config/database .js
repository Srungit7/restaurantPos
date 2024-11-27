import { Sequelize } from 'sequelize';

// Create a new Sequelize instance for PostgreSQL
const sequelize = new Sequelize('Restaurant DB', 'postgres', 'postgres7', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to true if you want to see raw SQL queries
});

try {
  await sequelize.authenticate();
  console.log('Database connection established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
