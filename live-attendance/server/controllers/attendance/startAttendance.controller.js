import { mongooconnect } from "../../lib/mongodb.js";
import {attendanceStartBodyValidation} from "../../zod/attendance/attends.validations.js"
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const startAttendance = async (req , res)=>{
    try {
        const body = req.body;
        const user = req.user;

        if(!body  || !user){
            return res.status(400).json({
                success:false,
                error:"Bad request!"
            })
        }

        // use teacher or not
        if(user.role !== "teacher"){
            return res.status(403).json({
                success:false,
                error:"Only teacher allows get current calss info!"
            })
        }


        const isValidBody = attendanceStartBodyValidation.safeParse(body);

        if(!isValidBody.success){
            return res.status(400).json({
                success:false,
                error:"Invalid data provided!"
            })
        }

        // mongodb connection

        const isConnected = await mongooconnect()

        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue.",
                message:"Failed to connect databse."
            })
        }

        const classInfo = await Class
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}