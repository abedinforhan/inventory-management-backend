const mongoose = require("mongoose");
const validator = require("validator")

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    brand: {
      type: String,
      trim: true,
      default: 'unknown'
    },
    contactNumber: [{
      type: String,
      requird: [true, 'Please provide a contact number'],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      }
    }],
    emergencyContactNumber: {
      type: String,
      required: [true, "Please provide  a emergency contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },
    tradeLicenceNumber: {
      type: Number,
      required: [true, 'Please provide your trade licence number'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Please provide your present address'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Please provide your present address'],
    },
    division: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ['dhaka', 'rajshahi', 'chattogram', 'sylhet', 'khulna', 'barishal', 'rangpur', 'mymensingh'],
        message: "{VALUE} is not  acorrect division!",
      },
    },
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    nationalIdImageURL: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "discontinue"],
    },
    createdAt: {
      type: String,
      default: Date.now(),
      select: 0,
    },
    updatedAt: {
      type: String,
      default: Date.now(),
      select: 0,
    }
  }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;




/*
"name":"Mezbaul Abedin Forhan",
"email":"mezba@test.com",
"brand":"osthir",
"contactNumber":"01712345678",
"emergencyContactNumber":"01712345678",
"tradeLicenceNumber":"1111111111",
"presentAddress":"944 osthir Street",
"permanentAddress":"944 Russell Street",
"division":"chattogram",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active",

*/

/*
"name":"Abdullah Al Fahim",
"email":"fahim@test.com",
"brand":"abdify",
"contactNumber":"01712345678",
"emergencyContactNumber":"01712345678",
"tradeLicenceNumber":"1111111111",
"presentAddress":"944 abdify Street",
"permanentAddress":"944 abdify Street",
"division":"Dhaka",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active",

*/