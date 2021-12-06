var fs = require ("fs"); 
fs.unlink('input.txt.gz', function (err){ 
    if(err) throw err; 
console.log("File is deleted...");
})