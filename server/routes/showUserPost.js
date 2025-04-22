import Router from "express";

import {Post} from '../models/mongodb.js'
import { userMiddleware } from "../middleware/usermiddleware.js";

const router = Router();
router.get("/userposts", userMiddleware,async(req,res)=>{
    try{
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "User not authenticated properly" });
        }
        const posts= await Post.find({author: req.user.id})
        res.status(200).json(posts)
    }catch(err){
        res.json({msg:"soemthig went wrong figure it out!!",err})
    }
})
export default router