const connection=require('../db/config');
const jwt=require('jsonwebtoken');
const secret='123456789!@#$%%^^&*(SFDFHFXGNCVNJFGvxcvxchvbchvhdkj'
let indexController={};


indexController.UserSignupHandler=(req,res)=>{
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

}

indexController.UserSigninHandler=(req,res)=>{
    console.log(req.body);
    let email=req.body.email;
    let password=req.body.password;

    let values=[email,password];

    let checkQuery="select * from users where email=? and password=? ";

    connection.query(checkQuery,values,(error,record)=>{
        if(error)
        {
            res.json({error:true,message:error.message})
        }
        else{
            if(record.length==0){
                res.json({error:true,message:"Invalid Email/Pasaword"})
            }
            else{
                res.json({error:false,message:"Login Successfully"})
            }
        }
    })
}

indexController.adminLoginHandler=(req,res)=>{
    
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
}

module.exports=indexController