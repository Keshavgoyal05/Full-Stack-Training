
var fs = require ("fs"); 
fs.unlink('./newfolder/input.txt', function (err){ 
    if(err) throw err; 
console.log("File is deleted...");
})

fs.rmdirSync ('NewFolder'); 
console.log("NewFolder Directory is deleted...");
