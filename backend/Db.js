import Dotenv from 'dotenv';
import mongoose from "mongoose";

Dotenv.config()
// eslint-disable-next-line no-undef
const connectedDb = mongoose.connect(process.env.DATABASE_URL).then(()=>console.log('Database connected')).catch(()=>console.log('Database is not connected'));

export default connectedDb;