import Router from "express";
import {userMiddleware} from "../middleware/usermiddleware.js";
import {Post} from "../models/mongodb.js";
const router = Router();

router.get("/posts",userMiddleware, async(req,res)=>{
   try{ const data = await Post.find({});
    res.status(201).json({data}); 
}catch(error){
    res.status(500).json({error
    })
}
})

export default router;