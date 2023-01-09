const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      validate: {
        validator: (value) => {
          if (value === '' || validator.isURL(value)) {
            return true
          }
          return false
        }
      }
    },
    otherImages: [{
      type: String,
      validate: {
        validator: (value) => {
          if (value === '' || validator.isURL(value)) {
            return true
          }
          return false
        }
      }
    }],
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
      },
    },
    category: {
      type: String,
      required: true,
      lowecase: true
    },
    brandName: {
      type: String,
      required: true,
    },
    brandID: {
      type: ObjectId,
      required: true,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
