const Category = require('../models/Category')


exports.getCategoriesService = async (filters, queries) => {

    const categories = await Category
        .find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy)
        ;

    const total = await Category.countDocuments(filters)
    const totalPage = Math.ceil(total / queries.limit)

    return { total, totalPage, categories };
}

exports.createCategoryService = async (data) => {
    const category = await Category.create(data);
    return category;
}
