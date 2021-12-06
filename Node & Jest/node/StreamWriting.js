var fs = require ("fs");
var zlib = require("zlib"); 
var data = "this is the data to br written in input.txt file";

var writerStream = fs.createWriteStream('input.txt'); 
writerStream.write(data);

writerStream.on ('finish', function () { 
    console.log("writing completed"); 
}) 
writerStream.on ('error', function (err) { 
    console.error("Error is "+err.stack); 
})

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("program is ended");