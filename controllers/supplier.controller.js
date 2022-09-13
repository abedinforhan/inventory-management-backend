const { createSupplierService, getSuppliersService, getSupplierByIdService,updateSupplierByIdService} = require("../services/supplier.service");


//GET ALL SUPPLIERS
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await getSuppliersService();

    res.status(200).json({
      status: "success",
      data: suppliers,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
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
      messgae: "Supplier created successfully !",
      data: newSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Supplier creation failed ! ",
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
    const filter = { _id : req.params.id };
    const update = req.body ;
    const options = { runValidators: true ,new:true};

    const updatedSupplier = await updateSupplierByIdService(filter, update,options);

    res.status(200).json({
      status: "success",
      data: updatedSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
