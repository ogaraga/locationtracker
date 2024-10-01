/* eslint-disable no-undef */
import express from "express";
import { User } from "./User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import verifyToken from "./auth.js";

const router = express.Router();


router.get('/home/:userId', verifyToken,(req, res) => {
    res.send('Welcome to backend home page!')
})


// export const userId = new ObjectId().toString();

router.post('/register', async (req, res) => {
    //find out if there is info about this user in the database
    const salt = await bcrypt.genSalt(10);
    const { email, password, confirmPassword, userName, userId} = req.body;
    const user = await User.findOne({ email })
    if (user) {
        res.status(400).json('User already exists')
    } else {
        try {
            //hide passwords with hash bcryptjs
            bcrypt.hash(password, salt, (err, hashed) => {
                if (err) console.log(err.message);
                bcrypt.hash(confirmPassword, salt, (err, hashed2) => {
                    if (err) console.log(err.message);
                    if (hashed == hashed2) {
                        const user = new User({
                            userName: userName,
                            email: email,
                            password: hashed,
                            confirmPassword: hashed2,
                            userId: userId
                        })
                        user.save();
                        res.status(201).json(user);

                    } else {
                        res.status(401).json('Password mismatch');
                    }
                })
            })

        } catch (error) {
            console.log(error.message)
        }
    }
});


// router.get('/register', verifyToken,async (req, res) => {
//     //find a specific user
//     if (req.query.userId) {
//         try {
//             const user = await User.find({ userId: req.query.userId })
//             if (user.length <= 0) {
//                 res.status(404).json(`No user with ${userId}`)
//             } else {
//                 res.status(200).json(user);
//             }
//         } catch (error) {
//             res.status(500).json(error.message);
//         }
//     } else {
//         //find all users
//         const user = await User.find();
//         if (user.length <= 0) {
//             res.status(404).json('Database is empty');
//         } else {
//             try {
//                 res.status(200).json(user);
//             } catch (error) {
//                 res.status(500).json(error.message)
//             }
//         }
//     }
// })


router.post('/login', async (req, res) => {

    //find out if this user/email is registered
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json('User email does not exist');
    }

    else {
        //compara passwords

        try {
            const userInfo = {
                email: user.email,
                userId: user.userId
            };
            bcrypt.compare(password, user.password, async (err, matched) => {
                if (err)
                    console.log(err.message);

                else if (!matched) {
                    res.status(400).json('Incorrect Password')
                }
                else {
                    await user.save();
                    const token = jwt.sign(userInfo, process.env.SEC_KEY_ACCESS, { expiresIn: '0.5h' });
                    res.header('Authorization', token)                    
                    res.status(200).json({user, token})
                }
            });

        } catch (error) {
            res.status(500).json('Authentication failed')
        }
    }
})
// router.get('/login', verifyToken, async (req, res) => {
//     const user = await User.find();
//     if (!user) {
//         throw res.status(400).json('No data to fetch');
//     } else {
//         res.status(200).json(user)
//     }
// });


router.put('/register/:userId', verifyToken,async (req, res) => {

    const user = await User.findById({ userId: req.params.userId })

    if (!user) {
        res.status(400).json('No profile to update')
    } else
        try {
            const { email, userName } = req.body;
            const filter = { userId: req.params.userId };
            const update = { userName: userName, email: email }
            const user = await User.findByIdAndUpdate(filter, update, { new: true })
            await user.save();
            res.status(200).json(`Profile updated successfully`)

        } catch (error) {
            res.status(500).json(error.message);
        }


}
)
//delete route for 
router.delete('/register/:userId', verifyToken,async (req, res) => {
    const user = await User.findById({ userId: req.params.userId })
    if (!user) {
        res.status(400).json('No profile to delete')
    } else {

        try {
            await User.findByIdAndDelete({ userId: req.params.userId })
            res.status(200).json(`Profile temporally deleted`);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
);
export default router;