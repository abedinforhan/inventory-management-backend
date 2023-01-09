const {
  getProductsService,
  createProductService,
  updateProductByIdService,
  getProductByIdService,
  addProductIdToBrandService,
  getProductsByBrandNameService
} = require("./product.service");

exports.getProducts = async (req, res) => {
  try {
    let queries = { ...req.query };

    //sort , page , limit -> exclude
    const excludeFields = ['search', 'sort', 'page', 'limit']
    excludeFields.forEach(field => delete queries[field])

    //gt ,lt ,gte .lte
    let queryString = JSON.stringify(queries)
    queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

    queries = JSON.parse(queryString)

    const filters = {
      limit: 10
    }

    if (req.query.search) {
      const searchText = req.query.search;
      queries.name = { $regex: searchText, $options: 'i' }
    }

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      filters.sortBy = sortBy
      console.log(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      filters.fields = fields
      console.log(fields);
    }

    if (req.query.page) {
      const { page, limit } = req.query;
      const skip = (page - 1) * parseInt(limit);
      filters.skip = skip;
      filters.limit = parseInt(limit);
    }

    const products = await getProductsService(queries, filters);

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the categories",
      error: error.message,
    });
  }
};

exports.getProductsByBrandName = async (req, res) => {
  try {
    const name=req.params.name;
    const products = await getProductsByBrandNameService(name)
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the categories",
      error: error.message,
    });
  }
}


exports.createProduct = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "data inserted successfully!",
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted ",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getProductByIdService(id);

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

exports.updateProductById = async (req, res) => {
  try {
    const query = req.params.id;
    const product = await updateProductByIdService(id);

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
