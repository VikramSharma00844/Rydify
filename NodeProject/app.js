const express=require('express');
const indexController=require('./controller/index.controller');
const app=express();

const cors=require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const jwt=require('jsonwebtoken');
const secret='123456789!@#$%%^^&*(SFDFHFXGNCVNJFGvxcvxchvbchvhdkj'

function UserAuthorization(req,res,next){
    const token=req.headers.authorization.split(" ")[1];
    if(token)
    {
        try{
            let data=jwt.verify(token,secret);
            req['userData']=data;
            next();
        }catch(error){
            res.json({error:true,message:"Unauthorized"});
        }
    }
    else{
        res.json({error:true,message:"Unauthorized"});
        
    }
}

app.post("/admin-login",indexController.adminLoginHandler)

// Public Pages
app.post("/user-signin",indexController.UserSigninHandler)
app.post("/user-signup",indexController.UserSignupHandler)


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