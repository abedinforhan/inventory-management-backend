const Brand = require("../models/Brand");

exports.createBrandService = async (data) => {
  const newBrand = await Brand.create(data);
  return newBrand;
}

exports.getBrandsService = async () => {
  const brands = await Brand.find({});
  return brands;
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


