import { Invoice } from "../../models/invoice.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createInvoice = async (req, res) => {
  try {
    const { customer, items, totalAmount } = req.body;
    const createdInvoice = await Invoice.create({
      customer: customer,
      items: items,
      totalAmount: totalAmount,
    });
    res
      .status(201)
      .send(
        new ApiResponse(201, createdInvoice, "Invoice created successfully.")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error creating Invoice.", error));
  }
};

export { createInvoice };
