import express from 'express';
import signupRouter from './routes/userSignUp.js'
import signinRouter from './routes/usersignIn.js'

const app = express();
app.use(express.json());

app.use('/user',signupRouter);
app.use('/user',signinRouter);



const port = 3000;
app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})