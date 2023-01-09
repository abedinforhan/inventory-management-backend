const Brand = require('./brand.model.js');

exports.getBrandsService = async (filters,queries) => {

  const brands = await Brand
        .find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select('-products -suppliers -createdBy -updatedAt -createdAt')
        .sort(queries.sortBy)
        ;

    const total = await Brand.countDocuments(filters)
    const totalPage = Math.ceil(total / queries.limit)

    return { total, totalPage,brands };
}

exports.createBrandService = async (data) => {
  const newBrand = await Brand.create(data);
  return newBrand;
}


exports.getBrandByIdService = async (id) => {
  const brand = await Brand.findOne({ _id: id });
  return brand;
}

exports.updateBrandService = async (id, data) => {
  const result = await Brand.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}
exports.deleteBrandService = async (id) => {
  const result = await Brand.deleteOne({ _id: id} );
  return result;
}


