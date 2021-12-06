var http = require ("http"); 
var fs = require ("fs"); 
var url = require ("url"); 
var path = require ("path"); 
function getData(){ 
    var empobj = {"enpid" : 101, "name" : "Keshav", "dept" : "IT", "Designation" : "Software Developer"} 
    return empobj; 
}

http.createServer( function (request, response) { 
    var pathName = url.parse(request.url).pathname;
    console.log("Request for " + pathName + " Received. ");
    if(pathName.substr(1)=="getData"){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(JSON.stringify(getData()));
        response.end();
    }
    else{
        fs.readFile(pathName.substr(1) , function(err,data){
            if(err){
                response.writeHead(404, {'Content-Type':'text/html'});
                response.write('Whoops! File not found!');
            }
            else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
            }
            response.end();
        })
        
    }
       
}).listen(8081);

console.log("Server is listening at http://localhost:8081");