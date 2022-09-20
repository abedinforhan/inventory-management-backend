const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      lowercase: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
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
      type: ObjectId,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);



const Product = mongoose.model("Product", productSchema);

module.exports = Product;
/*
{
  "name": "Dal",
  "description": "Dal or dhal, just like posole (or pozole) is both an ingredient and a dish: it refers to a type of dried split pea or lentil and the deeply spiced stew made from simmering the split peas until nicely broken down.",
  "unit": "kg",
  "status": "in-stock",
  "category":"Dal",
  "brand":"Pran"
}
*/