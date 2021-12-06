var express = require ("express"); 
var app = express(); 
app.use(express.json());

app.listen (8000, function () { 
    console.log("Server is listening at http://localhost:8000"); 
})
app.get ("/", function (req, res) { 
    console.log("At GET of http://localhost:8000"); 
    res.send ("Hello..."); 
})

//Q1.
app.get ("/login", function (req, res) { 
    console.log("At /login of server side..."); 
    var uid = req.query.uid;       //GET  : req.query.uid
    var pwd = req.query.password;  //POST : req.body.uid
    console.log(`Given data for User ID ${uid} pwd : ${pwd}`); 
    var strToReturn = "You are not a valid user, pls check the credentials..."; 
    if (uid == 'keshav' && pwd == 'admin') 
        strToReturn = "You are a valid user.."; 
    res.send (strToReturn); 
})

 
var empobj = [
    {"empid" : 101, "name" : "Keshav", "dept" : "IT", "Designation" : "Software Developer"},
    {"empid" : 102, "name" : "Charan", "dept" : "CS", "Designation" : "Trainer"},
    {"empid" : 103, "name" : "Naman", "dept" : "EC", "Designation" : "Manager"}
]  

//Q2.
app.get ("/getAllEmployeeData", function (req, res) {
    console.log("In GET of /getAllEmployeeData..."); 
    res.send (empobj); 
}) 

//Q3.
app.post ("/total_salary", function (req, res) { 
    var Basic = req.body.Basic; 
    var HRA = req.body.HRA; 
    var DA = req.body.DA; 
    var IT = req.body.IT;
    var PF = req.body.PF;
    ans= Basic + HRA + DA - (IT + PF) ;
    console.log(`Total Salary is : ${ans}`); 
    res.send (`Total Salary is : ${ans}`); 
}) 


//Q4.
app.get ("/getAllEmployees", function (req, res){ //getallEmployees, getEmployeeByID 
    console.log("In GET of /getAllEmployees..."); 
    res.send (empobj); 
}) 
app.get ("/getEmployeeById/:Id", function (req, res){ 
    var id = req.params.Id;
    var result = empobj.find(obj => {
        return obj.empid == id
    });
    console.log(`In GET of /getEmployeeById/${id}`); 
    res.send (result);
})
app.get ("/getEmployeeByName/:Name", function (req, res){ //getallEmployees, getEmployeeByID 
    var name = req.params.Name;
    var result = empobj.find(obj => {
        return obj.name == name
    });
    console.log(`In GET of /getEmployeeByName/${name}`); 
    res.send (result);
}) 
app.post ("/insertEmployeeData", function (req, res) {
    //res.send ("In POST of /insertEmployeeData...");
    var newEmpObj = {"empid" : req.body.empid, "name" : req.body.name, "dept" : req.body.dept, "Designation" : req.body.Designation}; 
    console.log(newEmpObj);
    try{
        empobj.push(newEmpObj);
        res.send("inserted successfully");
    }
    catch{
        err => { 
            console.error("Unable to insert the record. Error is "+ err); 
            res.status (400).send("Unable to insert the record"); 
        }
    }   
}) 
app.put ("/updateEmployeeData", function (req, res){ 
    console.log("In PUT of /updateEmployeeData...");
    var empobj1 = empobj.find(e => e.empid == req.body.empid);
    try{
        if (empobj1) {
            empobj1.name = req.body.name;
            empobj1.dept = req.body.dept,
            empobj1.designation = req.body.Designation;
            res.status (400).send("record updated successfully");
        } 
        else {
            res.status (400).send("record not found");
        } 
    }
    catch{ err => 
        { 
            res.send("Unable to update the record. Error is "+ err);  
        }
    }
}) 
app.delete ("/deleteRecord/:Id", function (req, res){ 
    var id = req.params.Id; 
    console.log("In DELETE of /deleteEmployee. Deleting the employee record with ID : "+id);
    var index = empobj.findIndex(function(o){
        return o.empid == id;
    })
    try{
        if (index !== -1) {
            empobj.splice(index, 1)
            var strmsg = "Record deleted successfully..."; 
            res.send(strmsg);
        }
        else{
            res.status(201).send("record not found to delete");
        }
    }
    catch{
        err => { 
            console.error("Unable to delete the record. Error is "+ err); 
            res.send("Unable to delete the record"); 
        }
    }   
})