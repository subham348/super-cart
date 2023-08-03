const express = require("express");
const {
  getAllProducts,
  getAProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
// const app = express();
const router = express.Router();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getAProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
