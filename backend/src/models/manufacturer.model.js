import mongoose, { Schema } from "mongoose";

const manufacturerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field not found. Please enter the manufacturer name"],
  },
  phone: {
    type: String,
    required: [true, "Field not found. Please enter the phone"],
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

export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
