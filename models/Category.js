const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this category."],
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;


/*
 {
  "name":"Rice"
 }
*/
/*
 {
  "name":"Oil"
 }
*/
/*
 {
  "name":"Dal"
 }
*/