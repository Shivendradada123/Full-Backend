import { mongooconnect } from "../../lib/mongodb.js";
import User from "../../models/User.js";
import jwt from 'jsonwebtoken'
import { tokenSchema, tokenValidation } from "../../zod/token/tokenValidation.js";
import z from 'zod'
/**
 * 
 * @param {import("express").Response} req 
 * @param {import("express").Response} res 
 */
export const currentUserData = async (req , res)=>{
    try {
        const token = req.header.autherization?.split(' ')[1];


        if(!token){
            return res.status(401).json({
                success:false,
                error:"Bad Request!"
            })
        }

        const isValidtoken = tokenSchema.safeParse(token)

        if(!isValidBody.success){
            return res.status(401).json({
                success:false,
                error:"Unotherized"
            })
        }

        let decodedToken ;


        try {
         decodedToken = jwt.verify(body.Autherization , process.env.JWT_SECRET)
        } catch (error) {
                return res.status(401).json({
                    success:false,
                    error: "Invalid token!"
                })
        }

        // if by change ivalid tojken format 
        const isValidToken = tokenValidation(decodedToken)

        if(!isValidToken){
            return res.status(401).json({
                success:false,
                error:"Invalid token format!"
            })
        }


        const isConnected = await mongooconnect()


        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue.",
                error:"Failed to connected database."
            })
        }

        // using aggregate to avoid the extra data or can say funtion provide the mongoose // i think both are same
        const user = await User.aggregate([
            {
                $match:{
                    _id:decodedToken.userId
                }
            },
            {
                $project:{
                    _id: 1,
                    name:1,
                    email:1,
                    role:1
                }
            }
        ])

        if(!user){
            return res.status(404).json({
                success:false, 
                error:"User not found!"
            })
        }

        return res.status(200).json({
            success:false,
            data:user
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}