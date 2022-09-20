const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
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
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs",
      },
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true
      },
    },
    store: {
      id: {
        type: ObjectId,
        ref: "Store",
        required: true,
      },
      name: {
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
          message: "{VALUE} is not a correct division!",
        },
      }
    },
    suppliedBy: {
      name: String,
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;

/*
{
    "name": "Atha",
    "description": "Dal or dhal, just like posole (or pozole) is both an ingredient and a dish: it refers to a type of dried split pea or lentil and the deeply spiced stew made from simmering the split peas until nicely broken down.",
    "price": "50",
  "unit": "kg",
    "quantity": 100,
  "status": "in-stock",
    "category": "Dal",
    "brand": {
        "name": "Teer",
        "id": "6321fc367f4c3f306c326fd4"
    },
    "store": "dhaka",
    "suppliedBy": {
        "name": "abdullah al fahim",
        "id": "6320af51e6e191317ce35858"
    }
}

{
  "name": "Moida",
  "description": "Dal or dhal, just like posole (or pozole) is both an ingredient and a dish: it refers to a type of dried split pea or lentil and the deeply spiced stew made from simmering the split peas until nicely broken down.",
  "price":"50".
  "unit": "kg",
  "quantity":100.
  "status": "in-stock",
  "category":"Dal",
  "brand":{
    "name":"Pran",
    "id":"6321fc737f4c3f306c326fda"
  },
  "store":"chattogram",
  "suppliedBy":{
    "name":"mezbaul abedin forhan",
    "id":"6320987755adfe04688d863c"
  }

}

*/
