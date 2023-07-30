const express = require("express");
const { getAllProducts } = require("../controllers/product");
// const app = express();
const router = express.Router();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.route("/products").get(getAllProducts);

module.exports = router;
