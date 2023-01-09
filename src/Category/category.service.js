const Category = require('./category.model')


exports.getCategoriesService = async (filters, queries) => {
    
    const categories = await Category
        .find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy)
        ;

    const count = await Category.countDocuments(filters)
    const totalPage = Math.ceil(count / queries.limit)

    return { count, totalPage, categories };
}

exports.createCategoryService = async (data) => {
    const category = await Category.create(data);
    return category;
}

exports.updateCategoryByIdService = async (id , data) => {
    const result = await Category.findByIdAndUpdate(id ,data)
    console.log(result);
    return result;
}

exports.deleteCategoryService = async (id) => {
    const category = await Category.deleteOne({_id:id});
    return category;
}
