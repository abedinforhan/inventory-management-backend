
//Model
const Brand = require('../models/Brand');
const { getProductsFromStocksService, createProductInStockService } = require('../services/stock.service');


exports.getProductsFromStock = async (req, res) => {
  try {
    const products = await getProductsFromStocksService(req.body)

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createProductInStock = async (req, res) => {
  try {
    const product = await createProductInStockService(req.body)

    res.status(200).json({
      status: "success",
      messgae: "data inserted successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " data is not inserted ",
      error: error.message,
    });
  }
};

// exports.getProductById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const product = await getProductByIdService(id);

//     res.status(200).json({
//       status: "success",
//       data: product,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// };

// exports.updateProductById = async (req, res) => {
//   try {
//     const query = req.params.id;
//     const product = await updateProductByIdService(id);

//     res.status(200).json({
//       status: "success",
//       data: product,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// };
