const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

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
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    imageURLs: {
      type: [String],
      validate: {
        validator: (value) => {
          let allOk = true;
          value.forEach((v) => {
            console.log(validator.isURL(v));
            if (!validator.isURL(v)) {
              allOk = false;
            }
          });
          return allOk;
        },
        message: "Provide a valid image URL",
      },
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs",
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
