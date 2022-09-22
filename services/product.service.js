const Product = require('../models/Product')
const Brand = require('../models/Brand')

exports.getProductsService = async () => {
    const products = await Product.find({});
    return products;
}

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
}

exports.getProductByIdService = async (id) =>{
    const product = await Product.findById(id);
    return product;
}

exports.updateProductByIdService= async (id) =>{
    const product = await Product.findByIdAndUpdate()
    return product;
}

exports.addProductIdToBrandService = async (query, productId) => {
    const result = await Brand.update(
      { _id: query },
      { $push: { products: productId } }
    )
    return result;
  }