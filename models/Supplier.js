const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;

// schema design
const supplierSchema = mongoose.Schema({
    nationalId: {
        type: String,
        required: true,

    },
    emergencyContact: {
        type: String,
        required: [true,'You must give a emergency contact number']
    },
    tradeLicenceNumber: {
        type: Number,
        required:[true,'You must submit your trade licence number']
    },
    // divison:{
    //     type:String,
    //     enum:{
    //       values:['Dhaka','Chattogram','Sylhet','Khulna'],
    //       message:'Given {VALUE} is not correct !'
    //     }
    // }

}, {
    timestamps: true,
})



const Supplier = mongoose.model('Supplier', productSchema)

module.exports = Supplier;