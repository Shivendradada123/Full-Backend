import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true, "please provide name!"],
    },
    email:{
        type:String,
        required:[true, "please provide emailid!"]
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:[true, "please provide role properly!"],
        enum:["student", "teacher"]
    }

},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;