const mongoose = require("mongoose");
const validator = require("validator");

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    },
    division: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ["dhaka", "rajshahi", "chattogram", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
        message: "{VALUE} is not  acorrect division!",
      },
      
    },



    // storeManager:{
    //   name: {
    //     type: String,
    //     required: [true, "Please provide a name"],
    //     trim: true,
    //     lowercase: true,
    //     minLength: [3, "Name must be at least 3 characters."],
    //     maxLength: [100, "Name is too large"],
    //   },
    //   email: {
    //     type: String,
    //     validate: [validator.isEmail, "Provide a valid Email"],
    //     trim: true,
    //     lowercase: true,
    //     unique: true,
    //   },
    //   contactNumber: [{
    //     type: String,
    //     required: [true, 'Please provide a contact number'],
    //     validate: {
    //       validator: (value) => {
    //         return validator.isMobilePhone(value);
    //       },
    //       message: "Please provide a valid phone number",
    //     }
    //   }],
    //   emergencyContactNumber: {
    //     type: String,
    //     required: [true, "Please provide  a emergency contact number"],
    //     validate: {
    //       validator: (value) => {
    //         return validator.isMobilePhone(value);
    //       },
    //       message: "Please provide a valid phone number",
    //     },
    //   },
    //   presentAddress: {
    //     type: String,
    //     required: [true, 'Please provide your present address'],
    //   },
    //   permanentAddress: {
    //     type: String,
    //     required: [true, 'Please provide your present address'],
    //   },
    //   division: {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     enum: {
    //       values: ['dhaka', 'rajshahi', 'chattogram', 'sylhet', 'khulna', 'barishal', 'rangpur', 'mymensingh'],
    //       message: "{VALUE} is not  acorrect division!",
    //     },
    //   },
    //   imageURL: {
    //     type: String,
    //     validate: [validator.isURL, "Please provide a valid url"],
    //   },
    //   nationalIdImageURL: {
    //     type: String,
    //     required: true,
    //     validate: [validator.isURL, "Please provide a valid url"],
    //   },
    //   status: {
    //     type: String,
    //     default: "active",
    //     enum: ["active", "inactive"],
    //   },
    //   createdAt: {
    //     type: String,
    //     default: Date.now(),
    //     select: 0,
    //   },
    //   updatedAt: {
    //     type: String,
    //     default: Date.now(),
    //     select: 0,
    //   }
    // }
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
"name":"Manager od Dhaka",
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
