var fs = require ("fs"); 

fs.mkdirSync ('NewFolder'); 
console.log("New directory named NewFolder is created..."); 

fs.rmdirSync ('NewFolder'); 
console.log("NewFolder Directory is deleted...");