/* eslint-disable no-undef */
import express from "express";
import mdel from "./User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const router = express.Router();


router.get('/', (req, res) => {
    res.send('loading...')
})
router.get('/register', (req, res) => {
    res.send('register')
})
router.get('/login', (req, res) => {
    res.send('login')
})
router.get('/update', (req, res) => {
    res.send('login')
})

const saltRound = bcrypt.genSaltSync(10);
router.post('/register', async (req, res) => {
    //find out if there is info about this user in the database
    const { email, password, confirmPassword, userName } = req.body;
    const user = await mdel.findOne({ email })
    if (user) {
        res.status(400).json('User already exists')
    } else {
        try {
            //hide passwords with hash method
            const passhashed = bcrypt.hashSync(password, saltRound)

            const passhashed2 = bcrypt.hashSync(confirmPassword, saltRound)
            const user = await mdel.create({
                userName: userName,
                email: email,
                password: passhashed,
                confirmPassword: passhashed2
            });
            if (passhashed === passhashed2) {
                await user.save();
                res.status(201).json(user);

            }
            else {
                res.status(401).json('Password mismatch');
            }
        } catch (error) {
            console.log(error.message)
        }
    }
})
router.post('/login', async (req, res) => {
    //find out if this user is registered
    const { email, password } = req.body;
    const user = await mdel.findOne({ email });
    if (!user) {
        res.status(400).json('The user is not in the database');
    }

    else {
        try {

            const UserId = {
                id: user._id,
                password: user.password
            };
            const verifyPassword = bcrypt.compareSync(password, user.password)
            if (!verifyPassword) {
                res.status(401).json('Password is incorrect!');
            } else {
                const token = jwt.sign(UserId, process.env.SEC_KEY_ACCESS, { expiresIn: '0.5h' });
                res.status(200).json({ user, token });

            }

        } catch (error) {
            res.status(500).json('Authentication failed')
        }
    }
})
router.put('/update/:_id', async (req, res) => {

    const user = await mdel.findById(req.params._id)

    if (!user) {

        res.status(400).json('No profile to fetch')
    } else
        try {
            const { password, email, userName } = req.body;
            const passhashed = bcrypt.hashSync(password, saltRound)
            const filter = { _id: req.params._id }
            const update = { userName: userName, email: email, password: passhashed }
            const user = await mdel.findByIdAndUpdate(filter, update, { new: true });
            await user.save();
            res.status(200).json({ "Authrorised_profile_updated": user })

        } catch (error) {
            res.status(500).json(error.message);
        }


}
)
router.delete('/update/:_id', async (req, res) => {
    const user = await mdel.findByIdAndDelete(req.params._id)

    try {
        res.status(200).json({ 'Authorised profile deleted': user });
    } catch (error) {
        res.status(500).json(error.message);
    }
}
);