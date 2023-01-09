const {
  getBrandsService,
  createBrandService,
  getBrandByIdService,
  updateBrandService,
  deleteBrandService
} = require("./brand.service");

exports.getBrands = async (req, res) => {
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
      console.log(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
      console.log(fields);
    }

    if (req.query.page) {

      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);

    }

    const brands = await getBrandsService(filters, queries);

    res.status(200).json({
      status: "success",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the categories",
      error: error.message,
    });
  }
};

exports.createBrand = async (req, res) => {
  try {

    const newBrand = await createBrandService(req.body);
    res.status(200).json({
      status: "success",
      message: "Brand is created successfully!",
      data: newBrand,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: "Couldn't create the brand",
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

    if (!result.modifiedCount) {
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

exports.deleteBrand = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteBrandService(id);
    console.log(result)

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't delete the brand with this id",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully deleted the brand"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't delete the brand",
    });
  }
};

