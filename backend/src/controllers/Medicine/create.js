import { Medicine } from "../../models/medicine.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createMedicine = async (req, res) => {
  try {
    const { drugName, medicineType, expiryDate, price, quantity } = req.body;
    const createdMedicine = await Medicine.create({
      drugName: drugName,
      medicineType: medicineType,
      expiryDate: expiryDate,
      price: price,
      quantity: quantity,
    });
    res
      .status(201)
      .send(
        new ApiResponse(201, createdMedicine, "Medicine created successfully.")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error creating Medicine.", error));
  }
};

export { createMedicine };
