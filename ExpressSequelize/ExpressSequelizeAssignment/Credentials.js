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
let CredentialTable = sequelize.define ('credentialsequelize', { 
    user_id : { 
        primaryKey : true, 
        type : Sequelize.STRING
     },
     password: Sequelize. STRING,
     role : Sequelize.STRING
    },{
        timestamps : false,
        freezeTableName : true
    }
);

/*
CredentialTable.sync({force :true}).then( () =>{ 
    console.log("Credential Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/


module.exports=CredentialTable;
