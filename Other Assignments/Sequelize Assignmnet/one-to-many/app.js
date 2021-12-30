const express = require("express");
const postModel = require("./models").post;
const commentModel = require("./models").comment;
 
const app = express();
const PORT = 8001;
app.get("/",(req,res)=>{
   res.status(200).json({
       status:1,
       message:"Welcome to homepage"
   });
});


app.get("/posts",(req,res)=>{
    postModel.findAll({
        include:{
            model:commentModel
        }
    }).then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        });
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message:'there is some error!!'+err
        });
    });
 });
 app.get("/comments",(req,res)=>{
    commentModel.findAll({
        include:{
            model:postModel
        }
    }).then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        });
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message:'there is some error!!'+err
        });
    });
 }); 
 
app.listen(PORT,()=>{
   console.log("Application is listening at:"+PORT);
})
