const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Setting path to .env configuration file
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
