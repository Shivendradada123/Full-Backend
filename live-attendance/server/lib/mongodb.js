import mongoose from "mongoose";

export const mongooconnect = async (uri)=>{
    try {
        // if mongo already connected
        if(mongoose.connection.readyState === 1) true;

        await mongoose.connect(uri,{
            dbName:"AttendaceSystem"
        })
        console.log("mongodb connected successfully!")
        return true
    } catch (error) {
        return false
    }
}
