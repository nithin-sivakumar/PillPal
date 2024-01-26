import { Customer } from "../../models/customer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const updateCustomer = async (req, res) => {
  try {
    const { firstName, lastName, dob, gender, phone, address } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        phone: phone,
        address: address,
      },
      { new: true }
    );
    if (!updatedCustomer) {
      res.send(
        new ApiResponse(
          200,
          null,
          "Customer with the provided ID does not exist."
        )
      );
    }
    res.send(
      new ApiResponse(200, updatedCustomer, "Customer updated successfully.")
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error updating Customer", [error]));
  }
};

export { updateCustomer };
