const Product = require('../models/Product')


exports.getProductsService = async (limit) => {
    const products = await Product.find({}).limit(+limit);
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