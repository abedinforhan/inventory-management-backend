const Supplier = require('../models/Supplier')

exports.getSuppliersService = async (limit) => {
    const suppliers = await Supplier.find({}).select('-__v');
    return suppliers;
}

exports.createSupplierService = async (data) => {
    const newSupplier = await Supplier.create(data);
    return newSupplier;
}

exports.getSupplierByIdService = async (id) =>{
    const supplier = await Supplier.findById(id).select('-__v');
    return supplier;
}

exports.updateSupplierByIdService= async (filter,update,options) =>{
    const product = await Supplier.findOneAndUpdate(filter,update,options)
    return product;
}

