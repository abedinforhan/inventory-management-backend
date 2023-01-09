const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a brand name"],
    maxLength: 100,
    unique: true,
  },
  description: String,
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: (value) => {
        if (value === '' || validator.isEmail(value)) {
          return true 
        }
        return false
      }
    }
  },
  website: {
    type: String,
    lowercase:true,
    validate: {
      validator: (value) => {
        if (value === '' || validator.isEmail(value)) {
          return true 
        }
        return false
      }
    }
  },
  address: String,
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
  suppliers: [{
    name: String,
    contanctNumber: String,
    id: {
      type: ObjectId,
      ref: "Supplier"
    }
  }],
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  createdBy: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;