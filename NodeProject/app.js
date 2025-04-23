const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());
app.use(express.json());
const connection=require('./db/config');

const jwt=require('jsonwebtoken');
const secret='123456789!@#$%%^^&*(SFDFHFXGNCVNJFGvxcvxchvbchvhdkj'


app.post("/admin-login",(req,res)=>{
    
    console.log(req.body);
    let email=req.body.email;
    let password=req.body.password;

    let values=[email,password];
    let checkAdmin="Select * from admin_login where email=? and password=?";

    connection.query(checkAdmin,values,(error,record)=>{
        if(error){
            res.json({error:true,message:error.message})
        }
        else{
           if(record.length==0)
           {
            res.json({error:true,message:"Invalid Email/Password"})
           }
           else{
            const payload={
                id:record[0].id,
                email:record[0].email,
                password:record[0].password
            };

            const token=jwt.sign(payload,secret,{expiresIn:'1d'});

            res.json({error:false,message:"Login Successfull",token:token})
           }
        }
    })
})

app.post("/user-signup",(req,res)=>{
    let fullname=req.body.fullname;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let password=req.body.password;
    let confirm_password=req.body.confirm_password;
    let dob=req.body.dob;
    let gender=req.body.gender;
    let city=req.body.city;
    let state=req.body.state;
    let zipcode=req.body.zipcode;
    
    let values=[fullname,email,mobile,password,dob,gender,city,state,zipcode];

    let insertQuery="insert into users(fullname,email,mobile,password,dob,gender,city,state,zipcode) values(?,?,?,?,?,?,?,?,?);"

    connection.query(insertQuery,values,(error)=>{
        if(error){
            res.json({error:true,message:error.message})
        }
        else{
            res.json({error:false,message:"Data Inserted Successfully"})
        }
    })

})


let port = 5000;
app.listen(port,(error)=>{
    if(error)
    {
        console.log(error.message);
    }
    else{
        console.log("Server started at port:"+port);

    }
})