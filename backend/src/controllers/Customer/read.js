import { Customer } from "../../models/customer.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find();
    res.send(
      new ApiResponse(200, allCustomers, "Customers fetched successfully")
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error fetching Customers", [error]));
  }
};

export { getAllCustomers };
