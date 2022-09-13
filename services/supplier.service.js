const Supplier = require('../models/Supplier')


//GET ALL SUPPLIERS
exports.getSuppliersService = async (limit) => {
    const suppliers = await Supplier.find({}).select('-__v');
    return suppliers;
}

//CREATE SUPPLIERS
exports.createSupplierService = async (data) => {
    const newSupplier = await Supplier.create(data);
    return newSupplier;
}

//GET SUPPLIER BY ID
exports.getSupplierByIdService = async (id) =>{
    const supplier = await Supplier.findById(id).select('-__v');
    return supplier;
}


//UPDATE SUPPLIER BY ID
exports.updateSupplierByIdService= async (filter,update,options) =>{
    const product = await Supplier.findOneAndUpdate(filter,update,options)
    return product;
}

