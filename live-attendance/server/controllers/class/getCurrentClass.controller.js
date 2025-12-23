import { mongooconnect } from "../../lib/mongodb.js";
import Class from "../../models/Class.js";
import { tokenValidation } from "../../zod/token/tokenValidation.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const getCurrentClassInfo = async (req , res )=>{
    try {
        const user = req.user;
        const _id = req.params.id

        if(!user || !_id){
            return res.status(400).json({
                success:false,
                error:"Bad request!"
            })
        }

        const isValidUserSchema = tokenValidation.safeParse(user)

        if(!isValidUserSchema.success){
            return res.status(401).json({
                success:false,
                error:"Invalid user!"
            })
        }

        if(user.role !== 'teacher'){
            return res.status(403).json({
                success:false,
                error:"only teacher allow to get student information!"
            })
        }

        const isConnected = await mongooconnect()

        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue."
            })
        }

        // best practice use the aggregatre 
       const classInfo = await Class.aggregate([
            {
                $match: {
                _id: new mongoose.Types.ObjectId(_id)
                }
            },
            {
                $lookup: {
                from: "users",               // User collection
                localField: "studentIds",    // Class field
                foreignField: "_id",         // User _id
                as: "students"
                }
            },
            {
                $project: {
                className: 1,
                teacherId: 1,
                students: {
                    _id: 1,
                    name: 1,
                    email: 1
                }
                }
            }
        ]);

        if(!classInfo){
            return res.status(404).json({
                success:false,
                error:"Class not found!"
            })
        }
        return res.status(200).json({
            success:true,
            data:classInfo[0]
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}