import { Medicine } from "../../models/medicine.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const updateMedicine = async (req, res) => {
  try {
    const { drugName, medicineType, expiryDate, price, quantity } = req.body;
    const updatedMedicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      {
        drugName: drugName,
        medicineType: medicineType,
        expiryDate: expiryDate,
        price: price,
        quantity: quantity,
      },
      { new: true }
    );
    if (!updatedMedicine) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Medicine with the provided ID does not exist."
        )
      );
    }
    res.send(
      new ApiResponse(200, updatedMedicine, "Medicine updated successfully.")
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error updating Medicine", [error]));
  }
};

export { updateMedicine };
