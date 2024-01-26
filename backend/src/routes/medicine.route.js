import express from "express";
import { createMedicine } from "../controllers/Medicine/create.js";
import { getAllMedicines } from "../controllers/Medicine/read.js";
import { deleteMedicine } from "../controllers/Medicine/delete.js";
import { updateMedicine } from "../controllers/Medicine/update.js";
const router = express.Router();

router.post("/", createMedicine);
router.get("/", getAllMedicines);
router.put("/:id", updateMedicine);
router.delete("/:id", deleteMedicine);

export default router;
