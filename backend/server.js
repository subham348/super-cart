const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Setting path to .env configuration file
dotenv.config({ path: "backend/config/config.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

// Connecting to database
connectDatabase();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
