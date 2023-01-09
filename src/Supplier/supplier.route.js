const express=require('express')
const router=express.Router()
const supplierController = require('./supplier.controller')

router.route('/')
.get(supplierController.getSuppliers)
.post(supplierController.createSupplier)

router.route("/:id")
.get(supplierController.getSupplierById)
.put(supplierController.updateSupplierById)

module.exports=router