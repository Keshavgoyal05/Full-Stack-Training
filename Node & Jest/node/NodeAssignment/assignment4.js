var fs = require ("fs"); 
var fileData = ""; 
var readerStream = fs.createReadStream('input.txt'); 
readerStream.on ('data', function (readData) {
    fileData = readData; 
}) 
readerStream.on ('end', function () { 
    var writerStream = fs.createWriteStream('input2.txt'); 
    writerStream.write(fileData);
    writerStream.on ('error', function (err) { 
        console.error("Error is "+err.stack); 
    })
    console.log("Data copied successfully from input.txt to input2.txt. ");   
}) 
readerStream.on ('error', function (err) { 
    console.error("Error is "+err); 
})

