const {
  getBrandsService,
  createBrandService,
} = require("../services/brand.service");

exports.getBrands = async (req, res) => {
  try {
    const brands = await getBrandsService();

    res.status(200).json({
      status: "success",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the brands",
      error: error.message,
    });
  }
};

exports.createBrand = async (req, res) => {
  try {
    // save or create

    const newBrand = await createBrandService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "Brand created successfully!",
      data: newBrand,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Brand creation failed ",
      error: error.message,
    });
  }
};


