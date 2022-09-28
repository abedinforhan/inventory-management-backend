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
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    imageURLs:[ {
      type: String,
      required:true,
      validate: [validator.isURL, "Please provide a valid url"]
    }],
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
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
      min: [0, "Product quantity can't be negative"]
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

stockSchema.index({ "productId": 1, "store.name": 1}, { "unique": true });

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
