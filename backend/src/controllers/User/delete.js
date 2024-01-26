import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const deleteUser = async (req, res) => {
  try {
    const exists = await User.findById(req.params.id);
    if (!exists) {
      res.send(
        new ApiResponse(200, null, "User with the provided ID does not exist.")
      );
    }
    await User.findByIdAndDelete(req.params.id);
    res.send(new ApiResponse(200, null, "User deleted successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error deleting user", [error]));
  }
};

export { deleteUser };
