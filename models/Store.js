const mongoose = require("mongoose");

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ["dhaka", "rajshahi", "chattogram", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
        message: "{VALUE} is not  acorrect division!",
      },
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User"
      }
    },
  },
  {
    timestamps: true
  }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;



/*
{
"name":"Dhaka Store",
"description":"It is located in dhaka.",
"status":"active",
"manager":{
"name":"Manager of Dhaka",
"email":"dhakamanager@test.com",
"contactNumber":"01234567899",
"emergencyContactNumber":"01234567899",
"presentAddress":"944 Dhaka Manager Street",
"permanentAddress":"944 Dhaka Manager Street",
"division":"dhaka",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active"
}
}
*/


/*
{
"name":"Chattogram Store",
"description":"It is located in chattogram.",
"status":"active",
"manager":{
"name":"Manager of Chattogram",
"email":"dhakamanager@test.com",
"contactNumber":"01234567899",
"emergencyContactNumber":"01234567899",
"presentAddress":"944 Chattogram Manager Street",
"permanentAddress":"944 Chattogram  Manager Street",
"division":"chattogram ",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active"
}
}
*/
