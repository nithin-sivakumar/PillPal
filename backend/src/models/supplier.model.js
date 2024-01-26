import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field not found. Please enter the supplier name"],
  },
  phone: {
    type: String,
    required: [true, "Field not found. Please enter the phone number"],
  },
  address: {
    type: String,
    required: [true, "Field not found. Please enter the address"],
  },
  medicineType: {
    type: String,
    required: [true, "Field not found. Please enter the medicine type"],
  },
});

export const Supplier = mongoose.model("Supplier", supplierSchema);
