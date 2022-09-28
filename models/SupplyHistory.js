const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const supplyHistorySchema = mongoose.Schema(
  {
    product: {
      id: {
        type: ObjectId,
        ref: "Product",
        required: [true, "Product id is missing"],
      },
      name: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
    },
    perUnitCost: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    totalCost: {
      type: Number,
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
    location: {
      type: String,
      enum: {
        values: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        message: "Given {VALUE} is not correct !",
      },
    },
    suppliedBy: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
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

supplyHistorySchema.pre('save', function (next) {
  if (this.quantity && this.perUnitCost) {
    this.totalCost = this.quantity * this.perUnitCost
  }
   console.log(this.perUnitCost,this.quantity,this.totalCost);
  next()
})




const Supply = mongoose.model("SupplyHistory", supplyHistorySchema);

module.exports = Supply;





/*

  {
    "product":{
      "id": "632c941745dd242074a7a1a7",
      "brand": "Pran",
      "name":"Pran Chinigura Aromatic Rice - 50kg"
    },
    "perUnitCost": 3000,
    "totalCost":6000,
    "quantity":2,
    "location":"Dhaka",
    "suppliedBy":{
      "name":"mezbaul abedin persian",
      "id":"632ca2c6b995083a54c0f9fd"
    },
    "status":"pending"
}

*/