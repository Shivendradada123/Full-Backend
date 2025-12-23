import { Router } from "express";
import addClassController from '../controllers/class/addClass.controller.js'
import { addStudentController } from "../controllers/class/addStudent.controller.js";

const router = Router()

router.post(addClassController)

router.route("/:id").get()

router.route("/:id/add-student").post(addStudentController)

export default router;