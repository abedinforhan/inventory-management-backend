const Supplier = require('./supplier.model')
const Brand = require('../Brand/brand.model.js')
const Store = require('../Store/store.model.js')

//GET ALL SUPPLIERS
exports.getSuppliersService = async (filters, queries) => {
    const suppliers = await Supplier
        .find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy)
        ;

    const total = await Supplier.countDocuments(filters)
    const totalPage = Math.ceil(total / queries.limit)

    return { total, totalPage,suppliers };

}

//CREATE SUPPLIERS
exports.createSupplierService = async (data) => {
    
    if (data.brandName && data.branchName) {
        const { _id:brandID } = await Brand.findOne({ name: data.brandName })
        const { _id:branchID } = await Store.findOne({ name: data.branchName })
        const newData = { ...data,brandID,branchID} 
      
        const newSupplier = await Supplier.create(newData);
        return newSupplier;
    }
}
//GET SUPPLIER BY ID
exports.getSupplierByIdService = async (id) => {
    const supplier = await Supplier.findById(id).select('-__v');
    return supplier;
}

//UPDATE SUPPLIER BY ID
exports.updateSupplierByIdService = async (filter, updatedData, options) => {
     const supplier = await Supplier.findOneAndUpdate(filter, updatedData, options)
    return supplier;
}

