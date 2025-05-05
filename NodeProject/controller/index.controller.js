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
                const payload={
                    id:record[0].id,
                    email:record[0].email,
                    password:record[0].password
                };
                
                const token=jwt.sign(payload,secret,{expiresIn:'1d'});

                res.json({error:false,message:"Login Successfully",token:token})
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

// Admin API's
indexController.addCategoryHandler=(req,res)=>{
    let category=req.body.category;
    

    let insertQuery="insert into categories(category) values(?)";

    connection.query(insertQuery,category,(error)=>{
        if(error){
            res.json({error:true,message:error.message})
        }
        else{
            res.json({error:false,message:"Category Added Successfully"})
        }
    })
}


indexController.addDealerHandler=(req,res)=>{
    
    console.log(req.body);
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let adhar=req.body.adhar;
    let pan=req.body.pan;
    let mobile=req.body.mobile;
    let gender=req.body.gender;
    let address=req.body.address;
    let city=req.body.city;
    let status=req.body.status;
    let photo=req.files.photo;

    let serverPath= `public/dealerPhoto/${photo.name}`  ;
    let dbPath=  `/dealerPhoto/${photo.name}`  ;
    


    // const [name,email,password,adhar,pan,mobile,gender,address,city,status,photo]=req.body;

    photo.mv(serverPath,(error)=>{
        if(error){
            res.json({error:true,message:error.message});
        }
        else{

            let values=[name,email,password,adhar,pan,mobile,gender,address,city,status,dbPath];

            let insertQuery="insert into dealer(name,email,password,adhar,pan,mobile,gender,address,city,status,photo) values(?,?,?,?,?,?,?,?,?,?,?) ";

            connection.query(insertQuery,values,(error)=>{
            if(error)
            {
              res.json({error:true,message:error.message});
            }
            else{
                res.json({error:false,message:"Dealer Added Successfully"})
            }
            })
        }
    })

    
}

indexController.updateDealerHandler=(req,res)=>{
    
    console.log(req.body);
    let id=req.body.id;
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let adhar=req.body.adhar;
    let pan=req.body.pan;
    let mobile=req.body.mobile;
    let gender=req.body.gender;
    let address=req.body.address;
    let city=req.body.city;
    let status=req.body.status;
    let photo=req.files.photo;

    let serverPath= `public/dealerPhoto/${photo.name}`  ;
    let dbPath=  `/dealerPhoto/${photo.name}`  ;
    


    // const [name,email,password,adhar,pan,mobile,gender,address,city,status,photo]=req.body;

    photo.mv(serverPath,(error)=>{
        if(error){
            res.json({error:true,message:error.message});
        }
        else{

            let values=[name,email,password,adhar,pan,mobile,gender,address,city,status,dbPath,id];

            //let updateQuery="update dealer set name="?",email="?",password="?",adhar="?",pan="?",mobile="?",gender="?",address="?",city="?",staus="?",photo="?"  where id=? ";

            connection.query(updateQuery,values,(error)=>{
            if(error)
            {
              res.json({error:true,message:error.message});
            }
            else{
                res.json({error:false,message:"Dealer Added Successfully"})
            }
            })
        }
    })

    
}

indexController.fetchDealerInfo=(req,res)=>{
    let selectQuery="select * from dealer";

    connection.query(selectQuery,(error,records)=>{
        if(error){
            res.json({error:true,message:error.message,records:[]})
        }
        else{
            res.json({error:false,message:"Record Fetched Successfully",records:records})
        }
    })
}

indexController.deleteDealerHandler=(req,res)=>{
    let id=req.params.id;
    console.log(id);

    let deleteQuery="delete from dealer where id=?";
    connection.query(deleteQuery,id,(error)=>{
        if(error)
        {
            res.json({error:true,message:error.message});
        }
        else{
            res.json({error:false,message:"Dealer Deleted Successfully"});
        }
    })
}

// User APIs

indexController.userChangePasswordHandler=(req,res)=>{
    console.log(req.body);
    
    const {current_password,new_passsword,confirm_password}=req.body;

    let updateQuery="update dealer set password";

    let values=[]
}


module.exports=indexController