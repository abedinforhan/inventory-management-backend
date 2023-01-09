const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const purchaseSummarySchema = mongoose.Schema({
  purchaseNo: {
    type: Number,
    min: 0,
    required: [true, "Please Provide a Purchase Number"],
    maxLength: 20,
    unique: true,
  },
  note: {
    type: String,
    trim: true,
    maxLength: 60
  },
  supplierName: {
    type: String,
    required: [true, 'Please Provide a Suplier Name'],
    trim: true,
    maxLength: 30,
  },
  supplierId: {
    type: ObjectId,
    required: [true, 'Please Provide a purchase Id'],
  },
  shippingCost: {
    type: Number,
    required: true,
    min: 0,
  },
  tax: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    min: 0
  },
  otherCost: {
    type: Number,
    min: 0
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  },
  createdBy: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'completed', 'cancelled'],
      message: '{VALUE} is not a correct option!'
    }

  }

}, {
  timestamps: true
});

const PurchaseSummary = mongoose.model("Brand", purchaseSummarySchema);

module.exports = PurchaseSummary;