import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Field not found. Please enter the first name"],
  },
  lastName: {
    type: String,
    required: [true, "Field not found. Please enter the last name"],
  },
  dob: {
    type: String,
    required: [true, "Field not found. Please enter the date of birth"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: [true, "Field not found. Please enter the gender"],
  },
  phone: {
    type: Number,
    required: [true, "Field not found. Please enter a valid phone number"],
  },
  address: {
    type: String,
    required: [true, "Field not found. Please enter a valid address"],
  },
});

export const Customer = mongoose.model("Customer", customerSchema);
