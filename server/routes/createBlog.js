import Router from "express";
import {userMiddleware} from "../middleware/usermiddleware.js";

import {Post} from "../models/mongodb.js";

const router = Router();

router.post("/posts",userMiddleware, async (req, res) => {
  const blog = req.body;
  try {
    const data = new Post({
      title: blog.title,
      content: blog.content,
      author: req.user.id
    });
    const value =  await data.save();
    res.status(201).json({ msg: "post created", value });
  } catch (error) {
    res.status(401).json({ msg: "something went wrong during creation",error });
  }
});
export default router;
