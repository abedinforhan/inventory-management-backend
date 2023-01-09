const express = require("express");
const router = express.Router();
const unitController = require("./unit.controller");

router.route("/")
  .get(unitController.getUnits)
  .post(unitController.createUnit);

module.exports = router;