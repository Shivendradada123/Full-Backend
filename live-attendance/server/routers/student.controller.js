import {Router} from "express"
import {getAllStudent} from "../controllers/student/getAllStudent.js"
const router = Router()

router.route('/').get(getAllStudent)

export default router;