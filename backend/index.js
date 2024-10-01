/* eslint-disable no-undef */
import Dotenv from 'dotenv';
import express from 'express';
import connectedDb from './Db.js';
import router from './routes.js';
import cors from 'cors';
import cookiesParser from 'cookie-parser';
const app = express();
import { verifyToken } from './auth.js';
import bodyParser from 'body-parser';

Dotenv.config();
connectedDb();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: ['https://locationtracker-locate.vercel.app/'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cookiesParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use('/register/:id')
app.use('/home', verifyToken);
app.use('/login');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

