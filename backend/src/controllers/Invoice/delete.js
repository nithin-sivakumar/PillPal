import { Invoice } from "../../models/invoice.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await Invoice.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return res.status(404).send(new ApiError(404, "Invoice not found."));
    }

    res
      .status(200)
      .send(new ApiResponse(200, null, "Invoice deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error deleting invoice.", error));
  }
};

export { deleteInvoice };
