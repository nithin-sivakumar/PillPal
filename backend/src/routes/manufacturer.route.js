import express from "express";
import { createManufacturer } from "../controllers/Manufacturer/create.js";
import { getAllManufacturers } from "../controllers/Manufacturer/read.js";
import { updateManufacturer } from "../controllers/Manufacturer/update.js";
import { deleteManufacturer } from "../controllers/Manufacturer/delete.js";
const router = express.Router();

router.post("/", createManufacturer);
router.get("/", getAllManufacturers);
router.put("/:id", updateManufacturer);
router.delete("/:id", deleteManufacturer);

export default router;
