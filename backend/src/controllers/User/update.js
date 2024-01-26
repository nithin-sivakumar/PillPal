import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import bcrypt from "bcryptjs";

const updateUser = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: username,
        password: hashedPassword,
        email: email,
        fullName: fullName,
      },
      { new: true }
    );
    if (!updateUser) {
      res.send(
        new ApiResponse(200, null, "User with the provided ID does not exist.")
      );
    }
    res.send(new ApiResponse(200, updatedUser, "User updated successfully."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiError(500, "Error updating user", [error]));
  }
};

export { updateUser };
