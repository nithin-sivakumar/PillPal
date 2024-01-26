import { Customer } from "../../models/customer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteCustomer = async (req, res) => {
  try {
    const exists = await Customer.findById(req.params.id);
    if (!exists) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Customer with the provided ID does not exist."
        )
      );
    }
    await Customer.findByIdAndDelete(req.params.id);
    res.send(new ApiResponse(200, null, "Customer deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error deleting Customer", [error]));
  }
};

export { deleteCustomer };
