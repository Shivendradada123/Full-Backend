import { mongooconnect } from "../../lib/mongodb.js";
import User from "../../models/User.js";
import jwt from 'jsonwebtoken'
import {  tokenValidation } from "../../zod/token/tokenValidation.js";
import z from 'zod'
import mongoose from "mongoose";
/**
 * 
 * @param {import("express").Response} req 
 * @param {import("express").Response} res 
 */
export const currentUserData = async (req , res)=>{
    try {
       const userFromRequest = req.user;


       if(!userFromRequest){
            return res.status(401).json({
                success:false,
                error: "Unotherized!"
            })
       }
       // validating user data or not
       const isValidTokenData = tokenValidation.safeParse(userFromRequest)

       if(!isValidTokenData.success){
        return res.status(401).json({
            success:false,
            error:"Invalid token type!"
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
                    _id:new mongoose.Types.ObjectId( decodedToken.userId)
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