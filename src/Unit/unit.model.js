const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const unitSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a unit name"],
    maxLength: 5,
    unique: true,
    enum: {
      values: ["kg", "litre", "pcs", "bag"],
      message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
    },
  },
  createdBy: {
    type: String,
    trim: true,
    required: [true,'Created By is missing']
  }

}, {
  timestamps: true
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;