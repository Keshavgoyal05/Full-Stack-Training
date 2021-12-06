var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("../db.config");

const app = express(); 

//connect to DB
var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { 
    host : dbConfig.HOST, 
    dialect : dbConfig.dialect, 
    pool : { 
        max : dbConfig.pool.max, 
        min : dbConfig.pool.min, 
        acquire : dbConfig.pool.acquire, 
        idle : dbConfig.pool.idle 
    }
});

/*
// Connect with db using authentication() of sequelize. 
sequelize.authenticate().then( () => { 
    console.log("Connected to database successfully..."); 
}).catch (err => { 
    console.error("Unable to connect to db, because"+err); 
}).finally ( () => { 
    sequelize.close(); 
})
*/


// Define the structure of EmployeeSequelize table 
let StudentTable = sequelize.define ('studentsequelize', { 
    s_id : { 
        primaryKey : true, 
        type : Sequelize.INTEGER,

     },
     name: Sequelize.STRING,
     stream: Sequelize.STRING,
     marks : Sequelize.INTEGER,
     address : Sequelize.STRING,
     location: Sequelize.STRING,
     pincode: Sequelize.INTEGER,
     state : Sequelize.STRING,
     phone : {
        type : Sequelize.STRING,
        validate: {
            max: 9999999999,                  
            min: 0000000001,
        }
     }
    },{
        timestamps : false,
        freezeTableName : true
    }
);

/*
StudentTable.sync({force :true}).then( () =>{ 
    console.log("Student Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/


module.exports=StudentTable;


