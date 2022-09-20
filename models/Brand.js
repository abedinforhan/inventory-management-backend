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
    "description": "PRAN Sugar Confectionery has captured 55 percent of the Bangladesh market with more than 80 established brands around 10 major categories and has been delivered to more than 30 countries around the world. Understanding the brand essence and continuous effort to identify the consumer needs and creates value for them are also our core strength.",
    "email":"pran@test.com",
    "website":"https://pran.test.com",
    "location":"Uganda"
}
*/

/*
{
    "name": "ACI",
    "description": "Advanced Chemical Industries (ACI) Limited is one of the leading conglomerates in Bangladesh, with a multinational heritage. We have a mission to achieve business excellence through quality by understanding, accepting, meeting and exceeding customer expectations. We follow International Standards on Quality Management System to ensure consistent quality of products and services to achieve customer satisfaction.",
    "email":"aci@test.com",
       "location":"Honduras"
},

{
    "name": "Fresh",
    "description": "Fresh – a brand name of consumer goods from Meghna Group of Industries in Bangladesh.It offers a complete range of full cream milk products, wheat flour, wheat moida, wheat semolina (suji), refined soyabean oil, vacuum salt, spice powder, mix spice, lentil, natural drinking water, refined sugar & tea.",
       "location":"Morocco"
},

{
    "name": "Rupchanda",
    "description": "pchanda made a foray with soyabean oil, the edible oil market was commodity-driven and the consumer awareness was extremely low. The market was dominated by ‘loose selling’- oil in readily packaged format was an unknown concept. From entering a category at a time when it was completely commodity driven to building a brand that today resonates with ‘happy family moments’ – a consumer need-state, transcending category level relations is remarkable. Every marketing activity in all spheres of Rupchanda Soyabean Oil is crafted and executed with the focused intent of improving the quality of life of its consumers.",
    "location":"Gulisthan"
}


*/
