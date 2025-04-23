
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'system',
    database:'rydify'
});



connection.connect((error)=>{
    if(error)
    {
        console.log(error.message);
        console.log(error.message);
    }
    else{
        console.log("DB loaded successfully");
    }
});

module.exports=connection;