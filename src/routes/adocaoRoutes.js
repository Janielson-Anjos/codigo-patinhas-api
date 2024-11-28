import express from "express";
import {
  getAllAdoptions,
  getAdoptionById,
  createAdoption,
  updateAdoption,
  deleteAdoption,
} from "../controllers/adocaoController.js";
import {verifyAuth} from "../auth/authMiddleware.js"

const router = express.Router();

router.get("/", verifyAuth, getAllAdoptions);
router.get("/:id", verifyAuth, getAdoptionById);
router.post("/", verifyAuth, createAdoption);
router.put("/:id", verifyAuth, updateAdoption);
router.delete("/:id", verifyAuth, deleteAdoption);

export default router;
