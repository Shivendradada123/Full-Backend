import { mongooconnect } from "../../lib/mongodb.js";
import {classValidation} from "../../zod/class/class.js"
import { tokenValidation } from "../../zod/token/tokenValidation.js";
import Class from "../../models/Class.js"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const addClass = async (req , res ) =>{
    try {
        const user = req.user;
        const body = req.body;

        if(!user){
            return res.status(401).json({
                success:false,
                error:"Unotherized!"
            })
        }

        const isValidtoken = tokenValidation.safeParse(user)

        if(!isValidtoken){
            return res.status(401).json({
                success:false,
                error:"Invalid token type!"
            })
        }


        // if currentrole is not matching
        if(user.role !== "teacher"){
            return res.status(403),json({
                success:false,
                error:"Only teacher allowed to start the new class!"
            })
        }
        const isValidClass = classValidation.safeParse(body)

        if(!isValidClass.success){
            return res.status(400).json({
                success:false,
                error:"Invalid request."
            })
        }
        // conmectecx mongo db connection 
        const isConnected = await mongooconnect();

        if(!isConnected){
            return res.status(500).json({
                success:false,
                error:"Internal server issue."
            })
        }

        const createdClass = await Class.create({
            className:body.className,
            teacherId:user.userId,
        })
        
        if(!createdClass){
            return res.status(500).json({
                success:false,
                error:"Failed to create class!"
            })
        }

        return res.status(201).json({
            success:true,
            data:createdClass
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}

export default addClass;