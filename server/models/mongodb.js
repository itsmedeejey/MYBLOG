import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// mongoose.connect(process.env.MONGOOSE_URI)
mongoose.connect(process.env.MONGOOSE_URI)
.then(()=>console.log("connected successfully"))
.catch((err)=>console.error("connection error: ", err));

const UserSchema = new mongoose.Schema({
    email: {type: String,required:true,unique: true},
    password:String
});
const BlogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {                     
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
    role: String
});

const Admin = mongoose.model("Admin",AdminSchema)
const User = mongoose.model ("User",UserSchema)
const Post = mongoose.model ("Post",BlogPostSchema)

export  {Admin, User, Post}

