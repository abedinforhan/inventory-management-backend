const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

// schema design
const managerSchema = mongoose.Schema(
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
      enum: ["active", "inactive"],
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
)

const Manager =mongoose.model('Manager',managerSchema)

module.exports=Manager;