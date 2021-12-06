var http = require ("http"); 
http.createServer( function (request, response) { 
    response.write ("This is my first script from server to client.."); 
    response.end(); 
}).listen (8081); 
console.log("Server is listening at http : //localhost : 8081");