const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types; \
const validator = require("validator");

// schema design
const BrandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this category."],
      trim: true,
      unique: [true, "Name must be unique"],
    },
    description: String,
    companyEmail: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    companyWebsite: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },

  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;


