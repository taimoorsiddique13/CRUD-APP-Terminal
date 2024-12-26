const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entryRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/entries", entryRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crud-app") // Simplified connection
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
