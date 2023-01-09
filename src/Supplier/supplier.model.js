const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Please provide a contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      }
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Please provide  a emergency contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      enum: {
        values: ['male', 'female', 'others'],
        message: `{VALUE} is not a correct type`
      }
    },
    dateOfBirth: {
      type: Date,
    },
    tradeLicenceNo: {
      type: String,
      required: [true, "Please provide your trade licence number"],
    },
    nationalIdNo: {
      type: String,
      required: [true, "Please provide your National Id  Number"],
    },
    presentAddress: {
      type: String,
      required: [true, "Please provide your present address"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Please provide your present address"],
    },
    imageURL: {
      type: String,
    },
    nationalIdImageURL: {
       type: String,
    },
    brandName: {
      type: String,
      trim: true,
      required: true,
    },
    brandID: {
      type: ObjectId,
      required: true,
      ref: "Brand"
    },
    branchName: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ["dhaka", "rajshahi", "chattogram", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
        message: "{VALUE} is not  a correct division!",
      },
    },
    branchID: {
      type: ObjectId,
      required: true,
      ref: "Branch"
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    createdBy: {
      type: String,
      required: true
    }
  }, {
  timestamps: true
}
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;


