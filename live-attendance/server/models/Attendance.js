import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    status: {
        type:String,
        required:true,
        enum:["present", "absent"]
    }
},{timestamps:true})

const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema)

export default Attendance;