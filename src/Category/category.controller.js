const {
  getCategoriesService,
  createCategoryService,
  deleteCategoryService,
  updateCategoryByIdService
} = require("./category.service");

exports.getCategories = async (req, res) => {
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

    const categories = await getCategoriesService(filters, queries);

    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the categories",
      error: error.message,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const result = await createCategoryService(req.body);
    res.status(200).json({
      status: "success",
      message: "Category Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Failed To Create Category !",
      error: error.message,
    });
  }
};

//update category by ID
exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const data=req.body
    const result = await updateCategoryByIdService(id,data);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};


exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteCategoryService(id);
    res.status(200).json({
      status: "success",
      message: "Category deleted Successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Failed To Delete Category !",
      error: error.message,
    });
  }
};