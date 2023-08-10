const Product = require("../models/product");
const ErrorHandler = require("../utils/ErrorHandler");

// Get all products
const getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

// Get a product
const getAProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// Create Product -> Admin
const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Update product -> Admin
const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Product
const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

// exports.getAllProducts = getAllProducts;
module.exports = {
  getAllProducts,
  getAProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
