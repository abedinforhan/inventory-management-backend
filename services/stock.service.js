const Stock = require("../models/Stock");

exports.getStocksService = async (limit) => {
  const stocks = await Stock.find({});
  return stocks;
};

exports.createStockService = async (data) => {
  const stock = await Stock.create(data);
  return stock;
};

exports.getStockByIdService = async (id) => {
  const stock = await Stock.findById(id);
  return stock;
};

exports.getStockByStoreIdService = async (id, properties) => {
  const stocks = await Stock.find({ "store.stockId": id }, properties);
  return stocks;
};

exports.updateProductByIdService = async (id) => {
  const product = await Stock.findByIdAndUpdate();
  return product;
};
