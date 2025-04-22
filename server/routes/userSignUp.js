import Router from "express";
import bcrypt from 'bcryptjs'
import {User} from '../models/mongodb.js'

const router = Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
      console.log(err);
    }
  });
  
export default router;