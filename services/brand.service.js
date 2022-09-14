const Brand = require('../models/Brand')


exports.getBrandsService = async () => {
    const brands = await Brand.find({});
    return brands;
}

exports.createBrandService = async (data) => {
    const newBrand = await Brand.create(data);
    return newBrand;
}
