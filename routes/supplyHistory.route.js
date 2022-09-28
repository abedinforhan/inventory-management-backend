const express = require("express");
const router = express.Router();
const supplyHistoryController = require("../controllers/supplyHistory.controller");

router
  .route("/")
  .get(supplyHistoryController.getSupplyHistory)
  .post(supplyHistoryController.createSupply);

router.route("/:id").patch(supplyHistoryController.updateSupplyHistoryById);

module.exports = router;
