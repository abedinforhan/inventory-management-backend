const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
// schema design
const BrandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a brand name."],
      trim: true,
      unique: true,
    },
    description: String,
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
    },
    website: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    location: {
      type: String,
      trim: true,
    },
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    suppliers: [
      {
        type: ObjectId,
        ref: "Supplier",
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;

/*
{
    "name": "Pran",
    "description": "PRAN Sugar Confectionery has captured 55 percent of the Bangladesh market with more than 80 established brands around 10 major categories and has been delivered to more than 30 countries around the world. Understanding the brand essence and continuous effort to identify the consumer needs and creates value for them are also our core strength."
}
*/

/*
{
    "name": "TEER",
    "description": "TEER is the most acclaimed brand of City Group with footprint in edible oil, atta, flour, semolina, rice, lentil, sugar and animal feed products. The brand is synonymous to health, hygiene and excellence."
}
*/
