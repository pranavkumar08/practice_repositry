import mongoose, { model } from "mongoose";
const signup=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const user_model=model.mongoose("user_model",signup)