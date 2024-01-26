import { Manufacturer } from "../../models/manufacturer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteManufacturer = async (req, res) => {
  try {
    const exists = await Manufacturer.findById(req.params.id);
    if (!exists) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Manufacturer with the provided ID does not exist."
        )
      );
    }
    await Manufacturer.findByIdAndDelete(req.params.id);
    res.send(new ApiResponse(200, null, "Manufacturer deleted successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error deleting Manufacturer", [error]));
  }
};

export { deleteManufacturer };
