const mongoose = require('mongoose');

async function connect(){
    try
    {
        await mongoose.connect("mongodb://127.0.0.1:27017/admin?directConnection=true&serverSelectionTimeoutMS=2000")
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports={connect}