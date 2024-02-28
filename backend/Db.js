/* eslint-disable no-undef */

import Dotenv from 'dotenv';
import mongoose from "mongoose";

Dotenv.config()
const connectedDb =async()=>{ 
    try{
    await mongoose.connect(process.env.DATABASE_URL).then(()=>console.log(`Database connected`)).catch(()=>console.log(`Database is not connected`))
    
}catch(err){
    console.log('system connection problem')
}
}
export default connectedDb;