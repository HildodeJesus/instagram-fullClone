import { Router } from "express";

import userController from "../controllers/UserController";

const router = Router();

router.post("/", userController.createAnAccount);
router.post("/login", userController.loginInAccount);

export default router;
