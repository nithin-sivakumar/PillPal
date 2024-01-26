import { Manufacturer } from "../../models/manufacturer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const updateManufacturer = async (req, res) => {
  try {
    const { name, phone, address, medicineType } = req.body;
    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        phone: phone,
        address: address,
        medicineType: medicineType,
      },
      { new: true }
    );
    if (!updatedManufacturer) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Manufacturer with the provided ID does not exist."
        )
      );
    }
    res.send(
      new ApiResponse(
        200,
        updatedManufacturer,
        "Manufacturer updated successfully."
      )
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error updating Manufacturer", [error]));
  }
};

export { updateManufacturer };
