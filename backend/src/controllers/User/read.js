import { User } from "../../models/user.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(new ApiResponse(200, allUsers, "Users fetched successfully"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error fetching Users", [error]));
  }
};

export { getAllUsers };
