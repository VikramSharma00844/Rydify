const express=require('express');
const indexController=require('./controller/index.controller');
const app=express();

const fileUpload=require('express-fileupload');
app.use(fileUpload());

var cookieParser=require('cookie-parser');
app.use(cookieParser());

const cors=require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const jwt=require('jsonwebtoken');
const secret='123456789!@#$%%^^&*(SFDFHFXGNCVNJFGvxcvxchvbchvhdkj'

function AdminAuthorization(req,res,next){
    //console.log(req.cookies);
    let token=req.headers.authorization.split(" ")[1];
    console.log(token); 
    if(token)
    {
        try{
            let data=jwt.verify(token,secret);
            req['userData']=data;
            next();
        }catch(error){
            
            res.json({error:true,message:"Unauthorize"});
        }
    }
    else{
        res.json({error:true,message:"Unauthorized"});
        
    }
}

function UserAuthorization(req,res,next){
    //console.log(req.cookies);
    let token=req.headers.authorization.split(" ")[1];
    console.log(token); 
    if(token)
    {
        try{
            let data=jwt.verify(token,secret);
            req['userData']=data;
            next();
        }catch(error){
            
            res.json({error:true,message:"Unauthorize"});
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
app.post("/add-dealer",indexController.addDealerHandler)

// User APIs
app.post("/user-change-password",indexController.userChangePasswordHandler)

// Admin API's
app.post("/add-category",AdminAuthorization,indexController.addCategoryHandler)
app.get("/fetch-dealer",indexController.fetchDealerInfo)
app.delete("/delete-dealer/:id",AdminAuthorization,indexController.deleteDealerHandler)
app.post("/update-dealer",indexController.updateDealerHandler)

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