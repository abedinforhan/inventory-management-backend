const Stock = require('../models/Stock')


exports.getProductsFromStocksService = async () => {
  const products = await Stock.find({});
  return products;
}

exports.createProductInStockService = async (data) => {
  const product = await Stock.create(data);
  return product;
}

// exports.getProductByIdService = async (id) =>{
//     const product = await Product.findById(id);
//     return product;
// }

// exports.updateProductByIdService= async (id) =>{
//     const product = await Product.findByIdAndUpdate()
//     return product;
// }