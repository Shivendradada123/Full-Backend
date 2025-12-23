import { mongooconnect } from "../lib/mongodb.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next 
 */
export const mongoConnectMiddleWare = async (req , res , next)=>{
    try {
       const isConected =  await mongooconnect(process.env.MONGODB_URI)

       if(!isConected){
        return res.status(500).json({
            success:false,
            error:"Failed to connect databas."
        })
       }
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:"Internal server issue.",
            message: error.message
        })
    }
}