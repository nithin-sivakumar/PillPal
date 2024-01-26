import { Supplier } from "../../models/supplier.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const updateSupplier = async (req, res) => {
  try {
    const { name, phone, address, medicineType } = req.body;
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        phone: phone,
        address: address,
        medicineType: medicineType,
      },
      { new: true }
    );
    if (!updatedSupplier) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Supplier with the provided ID does not exist."
        )
      );
    }
    res.send(
      new ApiResponse(200, updatedSupplier, "Supplier updated successfully.")
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error updating Supplier", [error]));
  }
};

export { updateSupplier };
