import express from "express";
import { createSupplier } from "../controllers/Supplier/create.js";
import { getAllSuppliers } from "../controllers/Supplier/read.js";
import { updateSupplier } from "../controllers/Supplier/update.js";
import { deleteSupplier } from "../controllers/Supplier/delete.js";
const router = express.Router();

router.post("/", createSupplier);
router.get("/", getAllSuppliers);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;
