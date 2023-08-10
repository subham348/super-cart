const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");

app.use(express.json());

// Routes import
const product = require("./routes/product");

app.use("/api/v1", product);

// Middleware for Error
app.use(errorMiddleware);

module.exports = app;
