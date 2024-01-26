import { Invoice } from "../../models/invoice.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { customer, items, totalAmount } = req.body;

    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { customer: customer, items: items, totalAmount: totalAmount },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).send(new ApiError(404, "Invoice not found."));
    }

    res
      .status(200)
      .send(
        new ApiResponse(200, updatedInvoice, "Invoice updated successfully.")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error updating invoice.", error));
  }
};

export { updateInvoice };
