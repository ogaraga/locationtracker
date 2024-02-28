import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'
const mySchema = new mongoose.Schema({
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

}, {timeStamp: true})

export default mongoose.model('User', mySchema);
