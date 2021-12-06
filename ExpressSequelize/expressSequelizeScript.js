var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./db.config");

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
let EmployeeTable = sequelize.define ('employeesequelize', { 
    emp_id : { 
        primaryKey : true, 
        type : Sequelize.INTEGER
     },
     name: Sequelize. STRING,
     dept: Sequelize. STRING,
     designation : Sequelize.STRING
    },{
        timestamps : false,
        freezeTableName : true
    }
);

/*
EmployeeTable.sync().then( () =>{ 
    console.log("Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/

app.get ("/", function (req, res) { 
    console.log("At GET of http://localhost:8000"); 
    res.send ("Hello..."); 
})

//Retrieves data of all the employees.. 
app.get ("/getAllEmployees", function (req, res) { 
    EmployeeTable.findAll({raw : true}).then ( data => { 
        console.log(data); 
        res.status (200).send(data) 
    }).catch ( err => { 
        console.error("There is an error getting data from db : "+err); 
        res.status (400).send (err); 
    }) 
})

//obtains the data by Primary key. 
app.get ("/getEmployeeById/:id", function (req, res) { 
    var id = req.params.id; 
    console.log("Given id is : "+id);
    EmployeeTable.findByPk(id, {raw : true}).then ( data => { 
        console.log(data); 
        res.status (200). send (data) 
    }).catch (err => { 
        console.error("There is an error getting data from db : "+err); 
        res.status (400). send (err); 
    }) 
})

//Inserts a record into the table EmployeeSequelize. 
app.use (express.json()); 
app.post ("/insertEmployee", function (req, res) { 
    var emp_id = req.body.emp_id; 
    var name = req.body.name; 
    var dept = req.body.dept; 
    var designation = req.body.designation; 
    var empobj = EmployeeTable.build({emp_id : emp_id, name : name, dept : dept, designation : designation}); 
    empobj.save().then (data => { 
        var strmsg = "Record inserted successfully..."; 
        res.status (201).send (strmsg); 
    }).catch(err => { 
        console.error("Error is "+ err); res.status (400). send (err); 
    }) 
});

//Update the record. 
app.put ("/updateEmployee", function (req, res) { 
    var emp_id = req.body.emp_id; 
    var name = req.body.name; 
    var dept = req.body.dept; 
    var designation = req.body.designation; 
    EmployeeTable.update( 
        {name : name, dept : dept, designation : designation}, 
        {where : {emp_id : emp_id}} 
    ).then (data => { 
        console.log(data); 
        var strmsg = "Record updated successfully.."; 
        res.status (201).send (strmsg); 
    }).catch ( err => { 
        console.error("There is an error updating table : Reason : " + err); 
        res.status (400).send (err); 
    }) 
});

//Delete the record by ID. 
app.delete ("/deleteEmployeeById/:id", function (req, res) { 
    console.log("Entering deleteEmployeeByID"); 
    var id = req.params.id; 
    console.log("Given id is : "+id); 
    EmployeeTable.destroy ({where : {emp_id : id}}).then ( data => { 
        console.log(data); 
        var strmsg = "Record deleted successfully..."; 
        res.status (200). send (strmsg); 
    }).catch ( err => { 
        console.error("There is an error deleting a record : "+err); res.status (400).send (err); 
    }) 
})

app.listen (8000, function () { 
    console.log("Server is listening at http://locahost:8000"); 
});