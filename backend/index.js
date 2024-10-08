/* eslint-disable no-undef */
import Dotenv from 'dotenv';
import express from 'express';
import connectedDb from './Db.js';
import router from './routes.js';
import cors from 'cors';
import cookiesParser from 'cookie-parser';
const app = express();
import bodyParser from 'body-parser';

Dotenv.config();
connectedDb();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: ['https://locationtracker-client.vercel.app'],
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cookiesParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

