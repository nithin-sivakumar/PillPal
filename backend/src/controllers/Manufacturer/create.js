import { Manufacturer } from "../../models/manufacturer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createManufacturer = async (req, res) => {
  try {
    const { name, phone, address, medicineType } = req.body;
    const createdManufacturer = await Manufacturer.create({
      name: name,
      phone: phone,
      address: address,
      medicineType: medicineType,
    });
    res
      .status(201)
      .send(
        new ApiResponse(
          201,
          createdManufacturer,
          "Manufacturer created successfully."
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiError(500, "Error creating Manufacturer.", error));
  }
};

export { createManufacturer };
