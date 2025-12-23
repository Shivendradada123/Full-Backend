import { Router } from "express";
import {currentUserData} from "../controllers/auth/getCurrenUserDetail.controller.js"
const router = Router()

router.route("/me").get(currentUserData)

export default router