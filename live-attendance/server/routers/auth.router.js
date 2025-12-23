import { Router } from "express";
import { signUpController } from "../controllers/auth/signup.controller.js";
import { loginController } from "../controllers/auth/login.controller.js";

const router = Router()

router.route("/signup").post(signUpController)

router.route("/login").post(loginController)

router.route("/me").get()
export default router
