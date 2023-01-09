const { createSupplierService, getSuppliersService, getSupplierByIdService, updateSupplierByIdService } = require('./supplier.service');

//GET ALL SUPPLIERS
exports.getSuppliers = async (req, res) => {
  try {
    let filters = { ...req.query };

    //sort , page , limit -> exclude
    const excludeFields = ['sort', 'page', 'limit']
    excludeFields.forEach(field => delete filters[field])

    //gt ,lt ,gte .lte
    let filtersString = JSON.stringify(filters)
    filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

    filters = JSON.parse(filtersString)

    const queries = {}

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      queries.sortBy = sortBy
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
    }

    if (req.query.page) {

      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);

    }
    const suppliers = await getSuppliersService(filters, queries);

    res.status(200).json({
      status: "success",
      data: suppliers,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the suppliers!",
      error: error.message,
    });
  }
};

//CREATE SUPPLIER
exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = await createSupplierService(req.body);
    res.status(200).json({
      status: "success",
      message: "You have successfullly created a new supplier!",
      data: newSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Failed to create supplier! ",
      error: error.message,
    });
  }
};

//GET SUPPLIER BY ID
exports.getSupplierById = async (req, res) => {
  try {
    const id = req.params.id;
    const supplier = await getSupplierByIdService(id);

    res.status(200).json({
      status: "success",
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

//UPDATE SUPPLIER BY ID
exports.updateSupplierById = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = req.body;
    const options = { runValidators: true, new: true };

    const updatedSupplier = await updateSupplierByIdService(filter, update, options);

    res.status(200).json({
      status: "success",
      message:"Data is updated successfully !",
      data: updatedSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
