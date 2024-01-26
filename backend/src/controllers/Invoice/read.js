import { Invoice } from "../../models/invoice.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("items.medicineId");
    invoices.forEach((invoice) => {
      invoice.items.forEach((item) => {
        item.price =
          item.quantity * (item.medicineId.quantity * item.medicineId.price);
      });
    });
    res
      .status(200)
      .send(new ApiResponse(200, invoices, "Invoices retrieved successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error retrieving invoices.", error));
  }
};

export { getAllInvoices };
