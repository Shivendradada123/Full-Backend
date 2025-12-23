import { mongooconnect } from "../../lib/mongodb.js"
import {tokenValidation} from "../../zod/token/tokenValidation.js"
import User from '../../models/User.js'
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const getAllStudent = async (req , res )=>{
    try {
        const user = req.user
        const skip = Number(req.query.skip) || 0;
        const limit = Number(req.query.limit) || 100

        const isValidTokenUser = tokenValidation.safeParse(user)
        if(!user || !isValidTokenUser.success){
            return res.status(401).json({
                success:false,
                error:"Invalid token!"
            })
        }

        if(user.role !== "teacher"){
            return res.status(403).json({
                success:false,
                error:"Only teacher allow to get all student!"
            })
        }

        const isConnected = await mongooconnect()

        if(!isConnected){
            return res.status(500).json({
                success:false,
                errro:"Internal server issue."
            })
        }

        const students = await User.aggregate([
            {
                $match:{
                    role:"student"
                }
            },
            {
                $project:{
                    _id:1,
                    name:1,
                    email:1
                }
            },
            {
                $skip:skip
            },
            {
                $limit: limit
            }
        ])
        return res.status(200).json({
            success:false,
            data:students
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}

