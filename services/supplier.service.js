const Supplier = require('../models/Supplier')


exports.getProductsService = async (limit) => {
    const products = await Product.find({}).limit(+limit);
    return products;
}

exports.createSupplierService = async (data) => {
    const newSupplier = await Supplier.create(data);
    return newSupplier;
}

exports.getProductByIdService = async (id) =>{
    const product = await Product.findById(id);
    return product;
}

exports.updateProductByIdService= async (id) =>{
    const product = await Product.findByIdAndUpdate()
    return product;
}