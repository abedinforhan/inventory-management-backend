const {
  getProductsService,
  createProductService,
  updateProductByIdService,
  getProductByIdService,
} = require("../services/product.service");

//Model
const Brand = require('../models/Brand')


exports.getProducts = async (req, res) => {
  try {
    const products = await getProductsService(req.query.limit);

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

exports.createProduct = async (req, res) => {
  try {
    const result = await createProductService(req.body);
    const productId = result._id;
    await Brand.updateOne(
      { _id: result.brand },
      { $push: { products: productId } }
    )


    res.status(200).json({
      status: "success",
      messgae: "data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " data is not inserted ",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getProductByIdService(id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const query = req.params.id;
    const product = await updateProductByIdService(id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
