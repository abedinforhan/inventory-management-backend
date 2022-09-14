const express=require('express')
const router=express.Router()
const brandController = require('../controllers/brand.controller')



router.route('/')
.get(brandController.getBrands)
.post(brandController.createBrand)

module.exports=router