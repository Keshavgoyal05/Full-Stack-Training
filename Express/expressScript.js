var express = require ("express"); 
var app = express(); 
app.use(express.json());
app.post ("/login", function (req, res) { 
    console.log("At /login of server side..."); 
    var uid = req.body.uid;       //GET  : req.query.uid
    var pwd = req.body.password;  //POST : req.body.uid
    console.log(`Given data for User ID ${uid} pwd : ${pwd}`); 
    var strToReturn = "You are not a valid user, pls check the credentials..."; 
    if (uid == 'keshav' && pwd == 'admin') 
        strToReturn = "You are a valid user.."; 
    res.send (strToReturn); 
}) 
app.listen (8000, function () { 
    console.log("Server is listening at http://localhost:8000"); 
})

app.get ("/getallData", function (req, res){ //getallEmployees, getEmployeeByID 
    console.log("In GET of /getAllData..."); 
    res.send ("In GET of /getallData..."); 
}) 
app.post ("/insertEmployee", function (req, res) { 
    var empId = req.body.empId; 
    var name = req.body.name; 
    var dept = req.body.dept; 
    var designation = req.body.designation; 
    console.log(`given data is : ${empId} ${name} ${dept} ${designation}`); 
    res.send ("In POST of /InsertEmployee..."); 
}) 
app.put ("/updateEmployee", function (req, res){ 
    res.send ("In PUT of /updateEmployee..."); 
}) 
app.delete ("/deleteEmployee", function (req, res){ 
    res.send ("In DELETE of /deleteEmployee"); 
})
app.delete ("/deleteEmployee/:Id", function (req, res){ 
    var id = req.params.Id; 
    res.send ("In DELETE of /deleteEmployee. Deleting the employee record with ID : "+id); 
})

//pre filter --> Actual code / Actual Route --> postFilter 
app.use ((req, res, next) => { 
    console.log('In the pre filter code. .URL : '+req.url + " Method : "+req.method); 
    next(); 
}); 
//Actual Route for /processData
app.get ("/processData", function (req, res, next) { 
    console.log("In ProcessData route..."); 
    res.send ("In the /processData route...");
    next(); 
}) 
//Post filter of route /processData
app.use ("/processData", function (req, res, next) { 
    console.log("Post filter of processData..."); 
})