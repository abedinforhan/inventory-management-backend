const express=require('express')
const router=express.Router()
const userController = require('../controllers/user.controller')



router.route('/')
.get(userController.getUsers)
.post(userController.createUser)
// .post(userController.applyAsSupplier)


 router.route("/:id")
// .get(productController.getProductById)

module.exports=router