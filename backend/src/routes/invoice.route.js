import express from "express";
import { createInvoice } from "../controllers/Invoice/create.js";
import { getAllInvoices } from "../controllers/Invoice/read.js";
import { updateInvoice } from "../controllers/Invoice/update.js";
import { deleteInvoice } from "../controllers/Invoice/delete.js";
const router = express.Router();

router.post("/", createInvoice);
router.get("/", getAllInvoices);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);

export default router;
