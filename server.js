// Import required modules
const express = require("express");
const { connection } = require("./postgres/postgres"); // Ensure this is the correct path for your DB connection
const userRoutes = require("./routes/userRoutes"); // Correctly importing userRoutes
const restaurantRoutes = require("./routes/restaurantRoutes");
// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080; // Use environment variable or default to 8080
const { sequelize } = require("./config/database");

// Middleware
app.use(express.json()); // Make sure JSON body parsing is enabled
// for parsing application/json requests
// Uncomment below if you want to use CORS and logging with morgan
// const cors = require('cors');
// const morgan = require('morgan');
// app.use(cors());  // Enable cross-origin requests
// app.use(morgan("dev"));  // Enable request logging

// Routes
app.get("/", (req, res) => {
  return res.status(200).send("<h1> Welcome to my Cafe Server</h1>");
});

// User routes
app.use("/api/v1/users", userRoutes); // This should correspond to your routes for user-related operations
app.use("/api/v1/restaurant", restaurantRoutes);
// Connect to database and start server
connection(); // Ensure your database connection function is working correctly

// Start the server
sequelize
  .sync() // Ensures that the tables are created if they don't exist and syncs changes
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error syncing database:", error));
