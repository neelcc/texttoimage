import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";       
import jwt from "jsonwebtoken"; 


export const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return(
                res.json({sucess:false,message: "Missing Details!"})
            )
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,email,password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
        res.json({sucess:true,user:{name:user.name} , token })
    }catch(error){
        console.log(error);
        res.json({sucess:false, message: error.message })
    }   
}


export const loginUser = async(req,res)=>{
    try{    
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        
        if(!user){
            return res.json({sucess:false,message: "User Does Not Exist!"})
        }
        const isMatch = await bcrypt.compare(password,user.password)


        if(isMatch){
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
            console.log(token);
            
           return  res.json({sucess:true,user:{name:user.name} , token })
        }
        else
        {
           return res.json({sucess:false,message: "Invalid Details!"})
        }

    }catch(error){
        console.log(error);
        res.json({sucess:false, message: error.message })
    }
}


export const userCredits = async(req,res) =>{
    
    try{
        console.log("i am working");
        
        const  userId  = req.userId;      
        // console.log(userId);
        
        const user = await userModel.findById(userId)   
        // console.log(user);
        
        res.json({success:true, credits : user.creditBalance, user:{name: user.name}})

    }catch(e){
        console.log("not worked");
        res.json({success:false, message: e.message })
    }
}

