const express=require('express')
const router=express.Router()
const supplierController = require('../controllers/supplier.controller')



router.route('/')
//.get(supplierController.getProducts)
.post(supplierController.createSupplier)



// router.route("/:id")
// .get(productController.getProductById)

module.exports=router