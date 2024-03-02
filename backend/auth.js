/* eslint-disable no-undef */
// routes/auth.js
import jwt from 'jsonwebtoken';

// middleware/authMiddleware.js to protect routes by verifying token

export function verifyToken(req, res, next) {

   
const MyHeader = req.header('Authorization');
if (!MyHeader){
return res.status(401).json({ error: 'Access denied' })
}else{
try {
 const decoded = jwt.verify(MyHeader, process.env.SEC_KEY_ACCESS);
 req.userId = decoded.userId;
 res.status(200).json('Access granted!')
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 }}

