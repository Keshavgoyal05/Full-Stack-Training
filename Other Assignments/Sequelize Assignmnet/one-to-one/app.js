const express = require("express");
const CredentialModel = require("./models").Credentials;
const UserModel = require("./models").UserDetails;
 
const app = express();
const PORT = 8001;
app.get("/",(req,res)=>{
   res.status(200).json({
       status:1,
       message:"Welcome to homepage"
   });
});


app.get("/users",(req,res)=>{
   UserModel.findAll({
    include: [{
        model: CredentialModel
    }]
   }).then((data)=>{
       res.status(200).json({
           status:1,
           data:data
       });
   }).catch((err)=>{
       res.status(500).json({
           status:0,
           message:'there is some error!!'
       });
   });
});

app.get("/credentials",(req,res)=>{
    CredentialModel.findAll({
     include: [{
         model: UserModel
     }]
    }).then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        });
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message:'there is some error!!'
        });
    });
 });
 
app.listen(PORT,()=>{
   console.log("Application is listening at:"+PORT);
})
