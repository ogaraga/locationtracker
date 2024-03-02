import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        minLength: 3['Name too short']
    },
    email: {
        type: String,
        require: true,
        minLength: 8['email too short'],
        unique: true
    },
    password:{
        type: String,
        require: true,
        minLength: 4['password too short']
        
    },
    confirmPassword:{
        type: String,
        require: true,
        minLength: 4['password too short']
        
    }, 
    userId:{
        type: Number,
        unique: true,
        min: 1,
        max: 90000000000
    }   

}, {timeStamp: true})

export const User =mongoose.model('User', userSchema);

