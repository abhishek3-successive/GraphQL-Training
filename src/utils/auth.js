import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

export const generateTokken = (user)=>{
    return jwt.sign({_id:user._id, email: user.email}, process.env.JWT_SCREATE);
}

export const verifyToken = (tokken)=>{
    try{
        return jwt.verify(tokken,process.env.JWT_SCREATE)
    } catch(err){
         console.log("Something went wrong", err);
    }
}