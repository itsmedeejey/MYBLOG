import Router from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import {User} from '../models/mongodb.js'

const router = Router();
const SECRET_KEY  = process.env.SECRET_KEY;
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const isPassword =  bcrypt.compare(password,existingUser.password)
        if(isPassword){
            const token = jwt.sign(email,SECRET_KEY)
            res.status(201).json({ message: 'login  successfully!',token });
        }
        if(!isPassword){
            return res.status(401).json({msg:"wrong password try again"})
        }
    }
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
      console.log(err);
    }
  });
  
export default router;