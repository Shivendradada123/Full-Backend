import { Router } from "express";
import addClassController from '../controllers/class/addClass.controller.js'
import { addStudentController } from "../controllers/class/addStudent.controller.js";
import {getAllStudent} from "../controllers/student/getAllStudent.js"
import {getMyAttendance} from "../controllers/student/getMyAttendance.js"
const router = Router()

router.post(addClassController)

router.route("/:id").get(getAllStudent)

router.route("/:id/add-student").post(addStudentController)

router.route("/:id/my-attendance").get(getMyAttendance)

export default router;