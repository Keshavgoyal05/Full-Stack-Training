var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("../db.config");
const CredentialTable = require("./Credentials");
const InsuranceTable = require("./Policy");
const UserTable = require("./User");
const app = express(); 
var cors = require('cors');
const { json } = require("sequelize");
const StudentTable = require("./student");
app.use(cors());
app.use (express.json());

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

app.listen (8000, function () { 
    console.log("Server is listening at http://locahost:8000"); 
});

app.get ("/", function (req, res) { 
    console.log("At GET of http://localhost:8000"); 
    res.send ("Hello..."); 
})

//////////////////////////////////////////////Insurance Table//////////////////////////////////////////
//Retrieves data of all the Insurance
app.get ("/getAllPolicies", function (req, res) { 
    InsuranceTable.findAll({raw : true}).then ( data => { 
        console.log(data); 
        res.status (200).send(data) 
    }).catch ( err => { 
        console.error("There is an error getting data from db : "+err); 
        res.status (400).send (err); 
    }) 
})

//obtains the data by Primary key. 
app.get ("/getPolicyById/:id", function (req, res) { 
    var id = req.params.id; 
    console.log("Given id is : "+id);
    InsuranceTable.findByPk(id, {raw : true}).then ( data => { 
        console.log(data); 
        res.status (200). send (data) 
    }).catch (err => { 
        console.error("There is an error getting data from db : "+err); 
        res.status (400). send (err); 
    }) 
})

//Inserts a record into the table insurancesequelize. 
 
app.post ("/insertPolicy", function (req, res) { 
    var insuranceObj = InsuranceTable.build({
        policy_no : req.body.policy_no, 
        policyHolderName : req.body.policyHolderName, 
        policyAmount : req.body.policyAmount, 
        maturityAmount : req.body.maturityAmount,
        nominee : req.body.nominee
    }); 
    insuranceObj.save().then (data => { 
        var strmsg = "Record inserted successfully..."; 
        res.status (201).send (strmsg); 
    }).catch(err => { 
        console.error("Error is "+ err); 
        res.status (400). send (err); 
    }) 
});

//Update the record. 
app.put ("/updatePolicy", function (req, res) { 
    InsuranceTable.update( 
        {
            policy_no : req.body.policy_no, 
            policyHolderName : req.body.policyHolderName, 
            policyAmount : req.body.policyAmount, 
            maturityAmount : req.body.maturityAmount,
            nominee : req.body.nominee
        }, 
        {
            where : {
                policy_no : req.body.policy_no
            }
        } 
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
app.delete ("/deletePolicy/:id", function (req, res) { 
    console.log("Entering deletePolicy"); 
    var id = req.params.id; 
    console.log("Given id is : "+id); 
    InsuranceTable.destroy ({where : {policy_no : id}}).then ( data => { 
        console.log(data); 
        var strmsg = "Record deleted successfully..."; 
        res.status (200). send (strmsg); 
    }).catch ( err => { 
        console.error("There is an error deleting a record : "+err); 
        res.status (400).send (err); 
    }) 
})

//////////////////////////////////////////////Credential Table//////////////////////////////////////////

//Inserts a record into the credentialsequelize table. 
app.use (express.json()); 
app.post ("/register", function (req, res) { 
    var userObj = CredentialTable.build({
        user_id : req.body.user_id, 
        password : req.body.password, 
        role : req.body.role
    }); 
    userObj.save().then (data => { 
        var strmsg = "User Registered Successfully"; 
        res.status (201).send (strmsg); 
    }).catch(err => { 
        console.error("Error is "+ err); 
        res.status (400). send (err); 
    }) 
});

//login user after correct credentials from credentialsequelize table
app.post ("/login", function (req, res) { 
    console.log("At /login of server side..."); 
    var uid = req.body.user_id;
    var pwd = req.body.password;
    console.log(`Given data for User ID ${uid} pwd : ${pwd}`); 
    var strToReturn = "You are not a valid user, pls check the credentials...";
    CredentialTable.findByPk(uid, {raw : true}).then ( data => { 
        console.log("password from DB : "+data);
        if (data!=null && data.password == pwd){
            strToReturn = "You are a valid user";
            res.status (200).send(strToReturn);
        }
        else{
            strToReturn = "login failed - Invalid User";
            res.status (401).send(strToReturn);
        }     
    }).catch ( err => { 
        console.error("There is an error getting data from user DB : "+err); 
        res.status (400).send (err); 
    })
})

//////////////////////////////////////////////User Table//////////////////////////////////////////

//Inserts a record into the table usersequelize. 
app.use (express.json()); 
app.post ("/registerUser", function (req, res) { 
    var userObj = UserTable.build({
        user_id : req.body.user_id,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email, 
        password : req.body.password
    }); 
    userObj.save().then (data => { 
        var strmsg = "User Registered Successfully"; 
        res.status (201).send (strmsg); 
    }).catch(err => { 
        console.error("Error is "+ err); 
        res.status (400). send (err); 
    }) 
});

//login user after correct credentials
app.post ("/loginUser", function (req, res) { 
    console.log("At /login of server side..."); 
    var uid = req.body.email;
    var pwd = req.body.password;
    console.log(`Given data for User ID ${uid} pwd : ${pwd}`); 
    var strToReturn = "You are not a valid user, pls check the credentials...";
    UserTable.findAll ({attributes : ['password'], where : {email : uid}, raw : true}).then ( (data) =>{  
        console.log("password from DB : "+JSON.stringify(data));
        if(data.length === 0){
            strToReturn = "User not found";
            res.status (200).send(strToReturn);
        }
        else{
            if (data[0].password == pwd){
                strToReturn = "You are a valid user";
                res.status (200).send(strToReturn);
            }
            else{
                strToReturn = "login credentials are invalid";
                res.status (200).send(strToReturn);
            }  
        }     
    }).catch ( err => { 
        console.error("There is an error getting data from user DB : "+err); 
        res.status (400).send (err); 
    })
})

//////////////////////////////////////////////Student Table//////////////////////////////////////////
app.get ("/getAllStudents", function (req, res) { 
    StudentTable.findAll({raw : true}).then ( data => { 
        console.log(data); 
        res.status (200).send(data) 
    }).catch ( err => { 
        console.error("There is an error getting data from db : "+err); 
        res.status (400).send (err); 
    }) 
})

//Inserts a record into the table insurancesequelize. 
app.post ("/insertStudent", function (req, res) { 
    var studentObj = StudentTable.build({
        s_id : req.body.s_id,
        name : req.body.name,
        stream: req.body.stream,
        marks : req.body.marks,
        address : req.body.address,
        location: req.body.location,
        pincode: req.body.pincode,
        state : req.body.state,
        phone: req.body.phone
    }); 
    studentObj.save().then (data => { 
        var strmsg = "Record inserted successfully..."; 
        res.status (201).send (strmsg); 
    }).catch(err => { 
        console.error("Error is "+ err); 
        res.status (400). send (err); 
    }) 
});

//Update the record. 
app.put ("/updateStudent", function (req, res) { 
    StudentTable.update( 
        {
            s_id : req.body.s_id,
            name : req.body.name,
            stream: req.body.stream,
            marks : req.body.marks,
            address : req.body.address,
            location: req.body.location,
            pincode: req.body.pincode,
            state : req.body.state,
            phone: req.body.phone
        }, 
        {
            where : {
                s_id : req.body.s_id
            }
        } 
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
app.delete ("/deleteStudent/:id", function (req, res) { 
    console.log("Entering deleteStudent"); 
    var id = req.params.id; 
    console.log("Given id is : "+id); 
    StudentTable.destroy ({where : {s_id : id}}).then ( data => { 
        console.log(data); 
        var strmsg = "Record deleted successfully..."; 
        res.status (200). send (strmsg); 
    }).catch ( err => { 
        console.error("There is an error deleting a record : "+err); 
        res.status (400).send (err); 
    }) 
})