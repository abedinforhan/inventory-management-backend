const express=require('express')
const router=express.Router()
const productController = require('./product.controller')



router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)


router.route("/:id")
.get(productController.getProductById)

router.route('/brand/:name')
.get(productController.getProductsByBrandName)


module.exports=router