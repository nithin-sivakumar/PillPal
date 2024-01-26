import express from "express";
const router = express.Router();
import adminRouter from "./admin.route.js";
import customerRouter from "./customer.route.js";
import medicineRouter from "./medicine.route.js";
import supplierRouter from "./supplier.route.js";
import manufacturerRouter from "./manufacturer.route.js";
import invoiceRouter from "./invoice.route.js";

router.use("/api/v1/admin", adminRouter);
router.use("/api/v1/customer", customerRouter);
router.use("/api/v1/medicine", medicineRouter);
router.use("/api/v1/supplier", supplierRouter);
router.use("/api/v1/manufacturer", manufacturerRouter);
router.use("/api/v1/invoice", invoiceRouter);

export default router;
