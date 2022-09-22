const express=require('express')
const router=express.Router()
const productController = require('../controllers/product.controller')



router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)

router.route("/:id")
.get(productController.getProductById)

module.exports=router