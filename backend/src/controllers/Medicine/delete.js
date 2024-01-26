import { Medicine } from "../../models/medicine.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteMedicine = async (req, res) => {
  try {
    const exists = await Medicine.findById(req.params.id);
    if (!exists) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Medicine with the provided ID does not exist."
        )
      );
    }
    await Medicine.findByIdAndDelete(req.params.id);
    res.send(new ApiResponse(200, null, "Medicine deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error deleting Medicine", [error]));
  }
};

export { deleteMedicine };
