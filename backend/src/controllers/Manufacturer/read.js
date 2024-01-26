import { Manufacturer } from "../../models/manufacturer.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllManufacturers = async (req, res) => {
  try {
    const allManufacturers = await Manufacturer.find();
    res.send(
      new ApiResponse(
        200,
        allManufacturers,
        "Manufacturers fetched successfully"
      )
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error fetching Manufacturers", [error]));
  }
};

export { getAllManufacturers };
