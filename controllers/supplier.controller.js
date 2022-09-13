const { createSupplierService } = require("../services/supplier.service");




exports.getSuppliers = async (req, res) => {
  try {
    // const products = await getProductsService(req.query.limit);

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

exports.createSupplier = async (req, res) => {
  try {
    console.log(req.body.contactNumber);
    console.log(Array.isArray(req.body.contactNumber));
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

exports.getSupplierById = async (req, res) => {
  try {
    // const id = req.params.id;
    // const product = await getProductByIdService(id);

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

exports.updateSupplierById = async (req, res) => {
  try {
    // const query = req.params.id;
    // const product = await updateProductByIdService(id);

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
