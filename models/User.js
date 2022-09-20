const mongoose = require("mongoose");
const validator = require("validator");
// schema design

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }),
        message: "Password is not strong enough.",
      },
    },
    role: {
      type: String,
      enum: ["buyer", "store-manager", "admin"],
      default: "buyer",
    },
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    contactNumber: [
      {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Please provide a valid phone number",
        },
      },
    ],
    shippingAddress: String,
    division: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ["dhaka", "rajshahi", "chattogram", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
        message: "{VALUE} is not  acorrect division!",
      },
    },
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "blocked"],
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;


/*

/*
"name":"Mezbaul Abedin Forhan",
"email":"mezba@test.com",
"password":"mezba123456##",
"confirmPassword":"mezba123456##",
"firtsName":"Mezbaul Abedin",
"lastName":"Forhan",
"contactNumber":"11111111111",
"shippingAddress:"944 osthir Street",
"presentAddress":"944 osthir Street",
"permanentAddress":"944 Russell Street",
"division":"chattogram",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active",

*/


//for manager

/*
"name":"Manager",
"email":"managerctg@test.com",
"password":"mezba123456##",
"confirmPassword":"mezba123456##",
"firtsName":"Manager of",
"lastName":"CTG",
"contactNumber":"11111111111",
"shippingAddress:"944 osthir Street",
"division":"chattogram",
"imageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",
"status":"active",
"emergencyContactNumber":"01712345678",
"presentAddress":"944 osthir Street",
"permanentAddress":"944 Russell Street",
"nationalIdImageURL":"https://i.ibb.co/WnFSs9Y/unnamed.webp",



*/
