import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";

import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const Login = async(req,res) =>{
    try{
        const{email,password} = req.body;
        if(!email || !password){
           return res.status(401).json({
            message:"Invalid data",
            success:false
           })
        };
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });


        }
const isMatch = await bcryptjs.compare(password,user.password);

if(!isMatch){
    return res.status(401).json({
        message:"Invalid email or password",
                success:false
    })
}

const tokenData = {
    id:user._id
}
const token = await jwt.sign(tokenData,"ggddsrdgjhjb",{expiresIn:"1d"});
    return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`welcome back ${user.fullName}`,
        success:true,
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email
            // add any other fields you want to send
          }
    })
    }catch(error){
console.log(error)
    }
}


export const Logout = async(req,res) =>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out Successfully",
        success:true
    })
}



export const Register = async(req,res) =>{
try{
    const{fullName,email,password} = req.body;
    if(!fullName || !email || !password){
        return res.status(401).json({
            message:"Invalid data",
            success:false
        })
    }
    const user = await User.findOne({ email });

    if(user){
        return res.status(401).json({
            message:"This email already used",
            success:false
        })
    }

    const hashedPassword = await bcryptjs.hash(password,16);
    await User.create({
        fullName,
        email,
        password:hashedPassword
    });
    return res.status(200).json({
        message:"Account Created successfully",
        success:true
        
    })

}catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
}
}