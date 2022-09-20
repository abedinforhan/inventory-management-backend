const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const stockSchema = mongoose.Schema({
  // product info
  product: {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      lowercase: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    supplier: {
      type: ObjectId,
      ref: "Supplier",
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      _id: ObjectId,
    },
    brand: {
      name: String,
      type: ObjectId,
      ref: "Brand",
    },
  },

  // store info
  store: {
    storeId: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "rajshahi",
          "chattogram",
          "sylhet",
          "khulna",
          "barishal",
          "rangpur",
          "mymensingh",
        ],
        message: "{VALUE} is not  a correct division!",
      },
    },
  },

});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;

/*
{
"name":"Dhaka Store",
"description":"It is located in dhaka.",
"status":"active",
"manager":{
"name":"Manager od Dhaka",
"email":"dhakamanager@test.com",
"contactNumber":"01234567899",
"emergencyContactNumber":"01234567899",
"presentAddress":"944 Dhaka Manager Street",
"permanentAddress":"944 Dhaka Manager Street",
"division":"dhaka",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active"
}
}
*/

/*
{
"name":"Chattogram Store",
"description":"It is located in chattogram.",
"status":"active",
"manager":{
"name":"Manager of Chattogram",
"email":"dhakamanager@test.com",
"contactNumber":"01234567899",
"emergencyContactNumber":"01234567899",
"presentAddress":"944 Chattogram Manager Street",
"permanentAddress":"944 Chattogram  Manager Street",
"division":"chattogram ",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active"
}
}
*/
