import { mongooconnect } from "../../lib/mongodb.js";
import emailValidation from "../../zod/auth/email.js";
import User from '../../models/User.js'
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const signUpController = async (req , res )=>{
    try {
        const body = req.body;

        if(!body){
            return res.status(400).json({
                success:false,
                error:"Bad Request"
            })
        }

        const isValid = emailValidation(body);

        if(!isValid.success){
            return res.status(400).json({
                success:false,
                error: isValid.error.format()
            })
        }

        // mongoconnection 
        const isConnected = await mongooconnect()

        if(!isConnected){
            console.log("Failed to connect databse.")
            return res.status(500).json({
                success:false,
                error:"Internal server issue."
            })
        }

        // store hashed password 
        const hashePassword = await bcryptjs.hash(body.password,10)
        const user = await User.create({...body, password:hashePassword})

        if(!user){
            return res.status(500).json({
                success:false,
                error:'Internal server issue!'
            })
        }

        const tokenPayload = {
            userId:user._id,
            role:user.role
        }
        // creating token and save into cookies
        
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)

        if(!token){
            return res.status(500).json({
                success:false,
                error:"internal server issue.",
                message:"Failed to create token!"
            })
        }

        res.cookie().set(process.env.COOKIE_NAME, token);

        return res.status(201).json({
            success:true,
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            error:"Internal server issue.",
        })
    }
}