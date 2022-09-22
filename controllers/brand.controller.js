const {
  getBrandsService,
  createBrandService,
  getBrandByIdService,
  updateBrandService
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
    const newBrand = await createBrandService(req.body);

    res.status(200).json({
      status: "success",
      message: "Brand created successfully!",
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

exports.getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandByIdService(id);

    if (!brand) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a brand with this id"
      })
    }

    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the brands",
    });
  }
};

exports.updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(id, req.body);

    console.log(result);

    if (!result.nModified) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't update the brand with this id",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully updated the brand"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't update the brand",
    });
  }
};

