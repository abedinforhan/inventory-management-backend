const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
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
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    contactNumber: [
      {
        type: String,
        requird: true,
        unique: true,
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Please provide a valid phone number",
        },
      },
    ],
    shippingDetails: [String],
    divison: {
      type: String,
      enum: {
        values: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        message: "Given {VALUE} is not correct !",
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
    role: {
      type: String,
      enum: ["buyer", "store-manager", "admin"],
      default: "buyer",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// {
//   "name": "Mezbah",
//   "email": "mezbah@gmail.com",
//   "password": "Mezbah123!",
//   "phoneNumber": "01812345678"
// }
