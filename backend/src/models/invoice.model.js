import mongoose, { Schema } from "mongoose";

const invoiceItem = new Schema({
  medicineId: {
    type: mongoose.Schema.ObjectId,
    ref: "Medicine",
    required: [true, "Field not found. Please enter the medicine ID"],
  },
  quantity: {
    type: Number,
    required: [true, "Field not found. Please enter the quantity"],
  },
});

const invoiceSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: [true, "Field not found. Please enter the customer ID"],
  },
  items: [invoiceItem],
  totalAmount: {
    type: Number,
    required: [true, "Field not found. Please enter the total amount"],
  },
});

export const Invoice = mongoose.model("Invoice", invoiceSchema);
