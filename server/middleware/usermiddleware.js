import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY;


 const userMiddleware = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
     return res.status(401).json({msg:"you are not athurized"})
    }
    try{
      const decodedValue =  jwt.verify(token,SECRET_KEY);
      req.user = decodedValue;
      next();      
    }catch(error){
      res.status(401).json({msg:"invalid token",error})
    }
 }   
 
 export { userMiddleware}; 
    
