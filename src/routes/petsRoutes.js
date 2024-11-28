import express from "express";
import {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} from "../controllers/petsController.js";
import { verifyAuth } from "../auth/authMiddleware.js"

const router = express.Router();

router.get("/", verifyAuth, getAllPets);
router.get("/:id", verifyAuth, getPetById);
router.post("/", verifyAuth, createPet);
router.put("/:id", verifyAuth, updatePet);
router.delete("/:id", verifyAuth, deletePet);

export default router;
