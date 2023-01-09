const express = require("express");
const router = express.Router();
const stockController = require("./stock.controller");

router
  .route("/")
  .get(stockController.getProductsFromStock)
  .post(stockController.createProductInStock);

module.exports = router;
