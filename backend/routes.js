/* eslint-disable no-undef */
import express from "express";
import User from "./User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
router.get('/register', async (req, res) => {
    //find a specific user
    if(req.query._id){
       try {
        const user = await User.find(req.query._id);
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
                _id: user._id,
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
router.put('/register/:_id', async (req, res) => {
        const _id = req.params._id;
    const user = await User.findById(_id)

    if (!user) {
        res.status(400).json('No profile to update')
    } else
        try {
            const { password, email, userName } = req.body;
            const passhashed = bcrypt.hashSync(password, saltRound)
            const filter = { _id: req.params._id }
            const update = { userName: userName, email: email, password: passhashed }
            const user = await User.findByIdAndUpdate(filter, update, { new: true });
            await user.save();
            res.status(200).json({ "Profile_with_id updated": _id })

        } catch (error) {
            res.status(500).json(error.message);
        }


}
)
router.delete('/register/:_id', async (req, res) => {
    const _id = req.params._id;
    const user = await User.findById(_id)

    if (!user) {
        res.status(400).json('No profile to delete')
    } else {

        try {
            await User.findByIdAndDelete(_id)
            res.status(200).json( `Profile with id ${_id} is temporally deleted`);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
);
export default router;