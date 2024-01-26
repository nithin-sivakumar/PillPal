import { Medicine } from "../../models/medicine.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllMedicines = async (req, res) => {
  try {
    const allMedicines = await Medicine.find();
    res.send(
      new ApiResponse(200, allMedicines, "Medicines fetched successfully")
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error fetching Medicines", [error]));
  }
};

export { getAllMedicines };
