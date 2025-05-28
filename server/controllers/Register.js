import { User } from "../models/userModel.js";

import bcryptjs from 'bcryptjs';
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
        message:"Account Created successfully"
        
    })

}catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
}
}