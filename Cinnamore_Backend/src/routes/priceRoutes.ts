// routes/priceRoutes.ts
import express from "express";
import { calculatePrice } from "../controller/priceController";

const router = express.Router();
router.post("/calculate-price", calculatePrice);

export default router;
