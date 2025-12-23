import {tokenValidation} from "../../zod/token/tokenValidation.js"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export const getMyAttendance = async (req , res)=>{
    try {
        const user = req.user;

        const isValidTokenUser = tokenValidation.safeParse(user)
            if(!user || !isValidTokenUser.success){
                    return res.status(401).json({
                        success:false,
                        error:"Invalid token!"
                    })
                }
        
            if(user.role !== "student"){
                return res.status(403).json({
                        success:false,
                        error:"Only student allow to get the studentinfo!"
                })
            }
            
              const isConnected = await mongooconnect()
            
                    if(!isConnected){
                        return res.status(500).json({
                            success:false,
                            errro:"Internal server issue."
                        })
                    }
            
        // const data = 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Internal server issue."
        })
    }
}