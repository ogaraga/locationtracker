/* eslint-disable no-undef */
import express from "express";
import User from "./User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {ObjectId } from "mongodb";

const router = express.Router();




const saltRound = bcrypt.genSaltSync(10);

router.get('/', (req, res) => {
    res.send('loading...')
})

router.get('/login', async (req, res) => {
    const user = await User.find();
    if (!user) {
        throw res.status(400).json('No data to fetch');
    } else {
        res.status(200).json(user)
    }
});

router.post('/register', async (req, res) => {
    //find out if there is info about this user in the database
    const { email, password, confirmPassword, userName} = req.body;
    const user = await User.findOne({ email })
    if (user) {
        res.status(400).json('User already exists')
    } else {
        try {
            //hide passwords with hash method
            const passhashed = bcrypt.hashSync(password, saltRound)

            const passhashed2 = bcrypt.hashSync(confirmPassword, saltRound)
            const user = await User.create({
                userName: userName,
                email: email,
                password: passhashed,
                confirmPassword: passhashed2,
                
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
});
router.get('/register', async (req, res) => {
    //find a specific user
    const id = new ObjectId({id: req.query.id}).toString();
    if(id){
       try {
        const user = await User.find(id)
        if(!user){
            res.status(404).json('No data to fetch')
        }else{
            res.status(200).json(user);
        }
       } catch (error) {
        res.status(500).json(error.message);
       }
    }else{
        //find all users
    const user = await User.find();
    if (!user) {
        res.status(400).json('No user found');
    } else {
        try {
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
})

router.post('/login', async (req, res) => {
    //find out if this user is registered
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json('The user is not in the database');
    }

    else {
        //compara passwords

        try {
            const userInfo = {
                id: user.id,
                password: user.password
            };
            const verifyPassword = bcrypt.compareSync(password, user.password)
            if (!verifyPassword) {
                res.status(401).json('Password is incorrect!');
            } else {
                const token = jwt.sign(userInfo, process.env.SEC_KEY_ACCESS, { expiresIn: '0.5h' });
                res.status(200).json({ user, token });

            }

        } catch (error) {
            res.status(500).json('Authentication failed')
        }
    }
})
router.put('/register/:id', async (req, res) => {

        const id = new ObjectId({id:req.params.id}).toString()
    const user = await User.findById(id)

    if (!user) {
        res.status(400).json('No profile to update')
    } else
        try {
            const { password, email, userName } = req.body;
            const passhashed = bcrypt.hashSync(password, saltRound)
            const filter = id; 
            const update = { userName: userName, email: email, password: passhashed }
            const user = await User.findByIdAndUpdate(filter, update, { new: true });
            await user.save();
            res.status(200).json( `${user} updated`)

        } catch (error) {
            res.status(500).json(error.message);
        }


}
)
router.delete('/register/:id', async (req, res) => {
    
    const id = new ObjectId({id: req.params.id}).toString()
    const user = await User.findById(id)

    if (!user) {
        res.status(400).json('No profile to delete')
    } else {

        try {
            await User.findByIdAndDelete(id)
            res.status(200).json( `${user} is temporally deleted`);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
);
export default router;