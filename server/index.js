const express = require("express");
const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const app = express();

//DB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes/authRoutes"));

// Start the server
app.listen(6969, () => {
  console.log("Server is running on port 6969");
});
