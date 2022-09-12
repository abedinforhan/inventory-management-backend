const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this category."],
      trim: true,
      unique: [true, "Name must be unique"],
    },
    description: String,
    productCount: {
      type: Number,
      default: 0,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: "Count must be an integer",
      },
    },

  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
