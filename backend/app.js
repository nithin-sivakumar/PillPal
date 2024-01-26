const { log } = require("console");
const express=require("express");
const app=express();
const mongoose = require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET="hbseufuehwuehgdb83478w)((edafndauhuhdanccijdWHYGQWG??!3edd";

const mongoUrl=
"mongodb://localhost:27017";

mongoose
.connect(mongoUrl,{
})
.then(()=>{
    console.log("connected to db");
})
.catch((e)=>console.log(e));


require("./userDetails");
const User=mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {fname,lname,email,password}=req.body;
    const encryptedPassword=await bcrypt.hash(password, 10);
    try{
        const oldUser= await User.findOne({email});
        if( oldUser)
        {
         return res.send({error:"User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });   
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"})
    }
    
});
app.post("/login-user",async(req,res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email});
    if(!user){
        return res.json({error:"User not found"});
    }  
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({status:"error"});
        }
    } 
    res.json({status:"password incorrect"});
});

app.listen(5000,()=>{
    console.log("server started")
});