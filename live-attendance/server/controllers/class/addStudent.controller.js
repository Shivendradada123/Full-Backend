import { mongooconnect } from "../../lib/mongodb.js";
import { studeIdValidaton } from "../../zod/class/class.js";
import { tokenValidation } from "../../zod/token/tokenValidation.js";
import Class from "../../models/Class.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const addStudentController = async (req ,res ) =>{
    try {
        const user = req.user;
        const body = req.body;
         const _id = req.params.id
        if(!user || !body || !_id){
            return res.status(400).json({
                success:false,
                error:"Bad request!"
            })
        }

        const isvalidUser = tokenValidation.safeParse(user)

        if(!isvalidUser.success){
            return res.status(400).json({
                success:false,
                error:"Invalid user schema!"
            })
        }

        if(user.role !== "teacher"){
            return res.status(403).json({
                success:false,
                error:"Only teacher allows to make present and absent!"
            })
        }

        const isValidBody = studeIdValidaton.safeParse(body);

        if(!isvalidUser.success){
            return res.status(400).json({
                success:false,
                error:"Bad request"
            })
        }

        const isConnected = await mongooconnect()

        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue."
            })
        }

        const updateClass = await Class.findOneAndUpdate(
            { _id },
            {
                $addToSet: {
                studentIds: body.studentId
                }
            },
            { new: true }
        );

        if(!updateClass){
            return res.status(404).json({
                success:false,
                error:"Class not found!"
            })
        }

        return res.status(200).json({
            success:true,
            data:updateClass
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}