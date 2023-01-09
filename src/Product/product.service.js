const Product = require('./product.model.')
const Brand = require('../Brand/brand.model.js')

exports.getProductsService = async (queries, filters) => {
    const products = await Product
        .find(queries)
        .skip(filters.skip)
        .limit(filters.limit)
        .select(filters.fields)
        .sort(filters.sortBy)
   
    const count = await Product.countDocuments(queries)

    const totalPage = Math.ceil(count / filters.limit)
    return { count, totalPage,products};
}

exports.createProductService = async (data) => {
    console.log(data);
    const {_id}= await Brand.findOne({name:data.brandName})
    const product = await Product.create({...data,brandID:_id});
   
    return product;
}

exports.getProductsByBrandNameService=async(name)=>{

 const products= await Product.find({brandName:name})
 return products;
}

exports.getProductByIdService = async (id) => {
    const product = await Product.findById(id);
    return product;
}

exports.updateProductByIdService = async (id) => {
    const product = await Product.findByIdAndUpdate()
    return product;
}

exports.addProductIdToBrandService = async (query, productId) => {
    const result = await Brand.updateOne(
        { _id: query },
        { $push: { products: productId } }
    )
    return result;
}