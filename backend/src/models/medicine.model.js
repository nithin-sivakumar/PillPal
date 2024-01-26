import mongoose, { Schema } from "mongoose";

const medicineSchema = new Schema({
  drugName: {
    type: String,
    required: [true, "Field not found. Please enter the drug name"],
  },
  medicineType: {
    type: String,
    required: [true, "Field not found. Please enter the medicine type"],
  },
  quantity: {
    type: Number,
    required: [true, "Field not found. Please enter the quantity"],
  },
  price: {
    type: Number,
    required: [true, "Field not found. Please enter the price"],
  },
});

export const Medicine = mongoose.model("Medicine", medicineSchema);
