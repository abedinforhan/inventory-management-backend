const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//routes
const productRoute = require("./src/Product/product.route");
const unitRoute= require("./src/Unit/unit.route")
const userRoute = require("./src/user/user.route");
const supplierRoute = require("./src/Supplier/supplier.route");
const brandRoute = require("./src/Brand/brand.route");
const categoryRoute = require("./src/Category/category.route");
const storeRoute = require("./src/Store/store.route");
const stockRoute = require("./src/Stock/stock.route");
const supplyHistoryRoute = require("./src/SuplpyHistory/supplyHistory.route");


//middlewares
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//routes
app.use("/api/v1/product", productRoute);
app.use("/api/v1/unit",unitRoute)
app.use("/api/v1/user", userRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/supply-history", supplyHistoryRoute);


module.exports = app;
