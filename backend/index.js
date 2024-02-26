import express from 'express';
import connectedDb from './Db.js';
import { router } from './routes.js';
import cors from 'cors';
const app = express();
import { verifyToken } from './auth.js';
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
connectedDb;
app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use('/', router);
app.use('/profile/:_id', verifyToken)
app.use('/home', verifyToken);
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

