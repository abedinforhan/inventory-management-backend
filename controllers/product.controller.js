const { getProductsService, createProductService, updateProductByIdService, getProductByIdService } = require("../services/product.services")



exports.getProducts = async (req, res) => {
    try {
        // const products = await Product
        //   .where("name").equals(/\w/)
        //   .where("quantity").gt(100).lt(600)
        //   .limit(2).sort({ qunatity: -1 })
        const products = await getProductsService(req.query.limit)

        res.status(200).json({
            status: "success",
            data: products
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        })
    }
}


exports.createProduct = async (req, res) => {

    try {
        // save or create

        const result = await createProductService(req.body)

        result.logger()

        res.status(200).json({
            status: 'success',
            messgae: 'Data inserted successfully!',
            data: result
        })
      
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: ' Data is not inserted ',
            error: error.message
        })
    }

}


exports.getProductById = async (req, res) => {

    try {
        const id = req.params.id
        const product = await getProductByIdService(id)

       res.status(200).json({
            status: 'success',
            data: product
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }

}

exports.updateProductById = async (req,res) =>{
  
    try {
        const query = req.params.id
        const product = await updateProductByIdService(id)

       res.status(200).json({
            status: 'success',
            data: product
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }
}