const express = require("express");
const router = express.Router();
const storeController = require("./store.controller");

router
  .route("/")
  .get(storeController.getStores)
  .post(storeController.createStore);

router.
  route("/:id")
  .get(storeController.getStoreById)
  .put(storeController.updateStoreById)
module.exports = router;
