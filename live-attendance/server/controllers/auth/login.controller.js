import bcrypt from "bcryptjs";
import { mongooconnect } from "../../lib/mongodb.js";
import User from "../../models/User.js";
import { loginBodyValidation } from "../../zod/auth/authValidations.js";
import jwt from 'jsonwebtoken'
/**
 * 
 * @param {import("express").Request} req 
* @param {import("express").Response} res 
 */
export const loginController = async (req , res )=>{
    try {
        const body = req.body;

        if(!body){
            return res.status(400).json({
                success:false,
                error:"Bad Request"
            })
        }

        const isValidData = loginBodyValidation.safeParse(boyd);


        if(!isValidData.success){
            return res.status(400).json({
                success:false,
                error: isValidData.error.format() || "Invalid email or password."
            })
        }

        const isConnected = await mongooconnect()

        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue.",
            })
        }

        //
        const user = await User.findOne({email:body.email}).select("email  password role").lean()

        if(!user){
            return res.status(404).json({
                success:false,
                error:"User not found!"
            })
        }

        // isPassword conrrect = 
        const isCorrectPassword = await bcrypt.compare(user.password   , body.password)


        if(!isCorrectPassword){
            return res.status(400).json({
                success:false,
                error:"Wrong Password!"
            })
        }

        const tokenPayload = {
            userId:user._id,
            role:user.role
        }

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)


        if(!token){
            return res.status(500).json({
                success:false,
                error:"Internal server issue.",
                message:"Failed to create token!" // for devloper perspective
            })
        }

        res.cookie().set(process.env.COOKIE_NAME, token)

        return res.status(200).json({
            success:true,
            data:{
                    token
                 },
            message:"User loged in succcessfully!"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Internal server issue.",
            message: error.message || "Something went wrong!"
        })
    }
}