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
let InsuranceTable = sequelize.define ('insurancesequelize', { 
    policy_no : { 
        primaryKey : true, 
        type : Sequelize.INTEGER
     },
     policyHolderName: Sequelize. STRING,
     policyAmount: Sequelize. INTEGER,
     maturityAmount : Sequelize.INTEGER,
     nominee : Sequelize.STRING
    },{
        timestamps : false,
        freezeTableName : true
    }
);

/*
InsuranceTable.sync().then( () =>{ 
    console.log("Insurance Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/

module.exports=InsuranceTable;


