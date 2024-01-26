import { Supplier } from "../../models/supplier.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllSuppliers = async (req, res) => {
  try {
    const allSuppliers = await Supplier.find();
    res.send(
      new ApiResponse(200, allSuppliers, "Suppliers fetched successfully")
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error fetching Suppliers", [error]));
  }
};

export { getAllSuppliers };
