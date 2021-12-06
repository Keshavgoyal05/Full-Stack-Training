var fs = require ("fs"); 
fs.readFile ('input.txt', function (err, data){ 
    if (err) 
        console.log("There is an error"+err) 
    else console.log("Read data in Asynchrous is "+data); 
}) 

var data = fs.readFileSync ('input.txt'); 
console.log("Read data in synchronous way : "+data);