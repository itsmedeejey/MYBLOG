import cors from 'cors'
import express from 'express';
import signupRouter from './routes/userSignUp.js'
import signinRouter from './routes/usersignIn.js'
import createPostRouter from './routes/createBlog.js'
import showPostRouter from './routes/showPost.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use('/user',signupRouter);
app.use('/user',signinRouter);
app.use('/user',createPostRouter);
app.use('/user',showPostRouter);




const port = 3000;
app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})