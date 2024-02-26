import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'
const mySchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        minLength: 3
    },
    email: {
        type: String,
        require: true,
        minLength: 5,
        unique: true
    },
    password:{
        type: String,
        require: true,
        minLength: 3,
        
    },
    confirmPassword:{
        type: String,
        require: true,
        minLength: 3,
        
    },

}, {timeStamp: true})

const model = mongoose.model('User', mySchema);

export default model;