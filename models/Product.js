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
      name: {
        type: String,
        required: true,
      },
      _id: ObjectId,
    },
    brand: {
      name: {
        type: String,
        default: "no-brand",
      },
      brandId: {
        type: ObjectId,
        ref: "Brand",
      },
    },
  },
  {
    timestamps: true,
  }
);

// mongoose middlewares for saving data: pre / post

productSchema.pre("save", function (next) {
  //this ->
  console.log(" Before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }

  next();
});

//  productSchema.post('save',function(doc,next){
//   console.log('After saving data');

//   next()
// })

productSchema.methods.logger = function () {
  console.log(` Data saved for ${this.name}`);
};

// SCHEMA -> MODEL -> QUERY

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
