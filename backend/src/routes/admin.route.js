import express from "express";
import { createUser } from "../controllers/User/create.js";
import { getAllUsers } from "../controllers/User/read.js";
import { updateUser } from "../controllers/User/update.js";
import { deleteUser } from "../controllers/User/delete.js";
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
