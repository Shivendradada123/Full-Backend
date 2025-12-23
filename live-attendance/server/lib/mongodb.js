import mongoose from "mongoose";

export const mongooconnect = async (uri)=>{
    try {
        await mongoose.connect(uri,{
            dbName:"AttendaceSystem"
        })
        console.log("mongodb connected successfully!")
        return true
    } catch (error) {
        return false
    }
}
