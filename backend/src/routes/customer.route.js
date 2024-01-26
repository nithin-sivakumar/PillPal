import express from "express";
import { createCustomer } from "../controllers/Customer/create.js";
import { getAllCustomers } from "../controllers/Customer/read.js";
import { updateCustomer } from "../controllers/Customer/update.js";
import { deleteCustomer } from "../controllers/Customer/delete.js";
const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
