import { Supplier } from "../../models/supplier.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createSupplier = async (req, res) => {
  try {
    const { name, phone, address, medicineType } = req.body;
    const createdSupplier = await Supplier.create({
      name: name,
      phone: phone,
      address: address,
      medicineType: medicineType,
    });
    res
      .status(201)
      .send(
        new ApiResponse(201, createdSupplier, "Supplier created successfully.")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error creating Supplier.", error));
  }
};

export { createSupplier };
