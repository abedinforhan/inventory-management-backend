const mongoose = require("mongoose");

// schema design
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for category."],
      trim: true,
      unique: true
    },
    description: String,
    imageURL: String
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;


/*
 {
  "name":"Rice",
  description: "Rice is very helthy. We should eat more rice.",
  imageURL: "https://chaldn.com/_mpimage/chinigura-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48071&q=low&v=1&m=400&webp=1"
 },

 {
  "name":"Oil",
  description: "Oil is fat.",
  imageURL: "https://chaldn.com/_mpimage/fresh-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D93160&q=best&v=1&m=400&webp=1"
 },

 {
  "name":"Sugar",
  description: "Eat less sugar",
  imageURL: "https://chaldn.com/_mpimage/loose-white-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98364&q=best&v=1&m=400&webp=1"
 }
*/