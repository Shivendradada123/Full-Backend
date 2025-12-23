import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    className:{
        type:String,
        required:true,
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true ,
    },
    studentIds:[{
        type:mongoose.Schema.Types.ObjectId
    }],
},{timestamps:true})

const Class = mongoose.models.Class || mongoose.model("Class", ClassSchema)

export default Class;