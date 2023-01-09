const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller");


router
  .route("/:id")
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory)

router
  .route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createCategory)



module.exports = router;
