var fs = require ("fs"); 
var fileData = ""; 
var readerStream = fs.createReadStream('input.txt'); 
readerStream.on ('data', function (readData) {
    fileData = readData; 
}) 
readerStream.on ('end', function () { 
    console.log("Read data : "+fileData);
    console.log("Total Characters : "+characterCount(String(fileData)));
    console.log("Total words : "+ wordCount(String(fileData)));
    console.log("Total Lines : "+lineCount(String(fileData)));
}) 
readerStream.on ('error', function (err) { 
    console.error("Error is "+err); 
})

function wordCount(str){
    return str.split("\n").join(" ").split(' ')
    .filter(function(n) { return n != '' })
    .length;
}
function lineCount(str){
    return str.split("\n").length;
}
function characterCount(str){
    return str.length;
}