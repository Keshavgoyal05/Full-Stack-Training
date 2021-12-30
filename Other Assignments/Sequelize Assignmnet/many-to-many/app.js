const express = require("express");
const bookModel = require("./models").book;
const authorModel = require("./models").author;
 
const app = express();
const PORT = 8001;
app.get("/",(req,res)=>{
   res.status(200).json({
       status:1,
       message:"Welcome to homepage"
   });
});


app.get("/books",(req,res)=>{
    bookModel.findAll({
        include:{
            model:authorModel
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
 app.get("/authors",(req,res)=>{
    authorModel.findAll({
        include:{
            model:bookModel
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
