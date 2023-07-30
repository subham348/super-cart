const getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working fine" });
};

// exports.getAllProducts = getAllProducts;
module.exports = { getAllProducts };
