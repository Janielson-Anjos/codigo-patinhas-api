import express from "express";
import {
  getAllUsuarios,
  getUsuarioById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/adotantesController.js";
import {verifyAuth} from "../auth/authMiddleware.js"

const router = express.Router();

router.get("/", verifyAuth, getAllUsuarios);
router.get("/:id", verifyAuth, getUsuarioById);
router.post("/", createUser);
router.put("/:id", verifyAuth, updateUser);
router.delete("/:id", verifyAuth, deleteUser);

export default router;