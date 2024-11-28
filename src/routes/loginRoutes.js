// import express from 'express';

// import {LoginController} from "../controllers/loginController.js";

// const router = express.Router();


// router.post('/', LoginController);

// export default router;

import express from "express";
import { LoginController } from "../controllers/loginController.js";

const router = express.Router();
const loginController = new LoginController();

// Rota de login
router.post("/", loginController.login);

export default router;
