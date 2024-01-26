import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const createUser = async (req, res) => {
  try {
    const { username, email, fullName, password } = req.body;
    const createdUser = await User.create({
      username: username,
      email: email,
      fullName: fullName,
      password: password,
    });
    res
      .status(201)
      .send(new ApiResponse(201, createdUser, "User created successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error creating user.", error));
  }
};

export { createUser };
