const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/product");
// const app = express();
const router = express.Router();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

module.exports = router;
