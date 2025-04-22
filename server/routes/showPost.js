import Router from "express";
import {userMiddleware} from "../middleware/usermiddleware.js";
import {Post} from "../models/mongodb.js";
const router = Router();

router.get("/posts", async(req,res)=>{
   try{
    
    const data = await Post.find({});
    res.status(201).json({data}); 
    console.log(data)
}catch(error){
    res.status(500).json({error
    })
}
})
router.get('/posts/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(400).json({ error: 'Invalid ID' });
    }
  });

export default router;