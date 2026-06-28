import express from "express";

import upload from "../middleware/uploadMiddleware.js";

import {
  addWaste,
  getWaste,
  verifyWaste,
  deleteWaste,
} from "../controllers/wasteController.js";

const router = express.Router();

router.post(
  "/add",
  upload.single("image"),
  addWaste
);

router.get("/", getWaste);

router.put(
  "/verify/:id",
  verifyWaste
);

router.delete(
  "/:id",
  deleteWaste
);

export default router;