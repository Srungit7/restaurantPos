//URL - http://localhost:8080
import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/testRoutes.js";
import sequelize from "./config/database .js";
import userRoutes from "./routes/userRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

import connection from "./postgres/postgres.js";
//dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
//midllewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
//URL -> http://localhost:8080
// app.use('/api/v1/test', router);
// app.get("/", (req, res) => {
//   return res.status(200).send("<h1> Welcome to my Cafe Server</h1>");
// });
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/restaurants", restaurantRoutes);

// Sync Sequelize models and start server
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan);
});

connection();
