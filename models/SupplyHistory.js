const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const supplyHistorySchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: [true, "Product id is missing"],
    },
    price: {
      type: Number,
      rquired: true,
      min: [0, "Price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity cant be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer",
    },
    divison: {
      type: String,
      enum: {
        values: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        message: "Given {VALUE} is not correct !",
      },
    },
    supplierId: {
      type: ObjectId,
      ref: "Supplier",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Supply = mongoose.model("SupplyHistory", supplyHistorySchema);

module.exports = Supply;
