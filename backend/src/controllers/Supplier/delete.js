import { Supplier } from "../../models/supplier.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteSupplier = async (req, res) => {
  try {
    const exists = await Supplier.findById(req.params.id);
    if (!exists) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Supplier with the provided ID does not exist."
        )
      );
    }
    await Supplier.findByIdAndDelete(req.params.id);
    res.send(new ApiResponse(200, null, "Supplier deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error deleting Supplier", [error]));
  }
};

export { deleteSupplier };
