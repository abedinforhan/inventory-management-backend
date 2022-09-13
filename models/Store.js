const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the store."],
      trim: true,
      unique: [true, "Name must be unique"],
    },
    description: String,
    divison: {
      type: String,
      enum: {
        values: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        message: "Given {VALUE} is not correct !",
      },
    },
    storeManagerId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
