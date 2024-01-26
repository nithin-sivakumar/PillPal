import { Customer } from "../../models/customer.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, dob, gender, phone, address } = req.body;
    const createdCustomer = await Customer.create({
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      phone: phone,
      address: address,
    });
    res
      .status(201)
      .send(
        new ApiResponse(201, createdCustomer, "Customer created successfully.")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error creating customer.", error));
  }
};

export { createCustomer };
