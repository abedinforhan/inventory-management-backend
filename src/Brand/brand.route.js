const express = require("express");
const router = express.Router();
const brandController = require("./brand.controller");



router.route("/")
  .get(brandController.getBrands)
  .post(brandController.createBrand);

router.route("/:id")
  .get(brandController.getBrandById)
  .put(brandController.updateBrand)
  .delete(brandController.deleteBrand);


module.exports = router;