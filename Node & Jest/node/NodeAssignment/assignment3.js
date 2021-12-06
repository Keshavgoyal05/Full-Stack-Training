var readline = require ('readline-sync');
var fs = require ("fs"); 
var fileData = ""; 
var readerStream = fs.createReadStream('input.txt'); 
readerStream.on ('data', function (readData) {
    fileData = readData; 
}) 
readerStream.on ('end', function () { 
    console.log("Read data : "+fileData);
    cnt=0;
    searchString = readline.question ("Enter String to be Searched : ");
    var s = String(fileData).split("\n").join(" ");
    //method 1
    var f = searchString;
    var i = 0,
        n = 0,
        j = 0;

    while (true) {
        j = s.indexOf(f, j);
        if (j >= 0) {
            n++;
            j++;
        } else
            break;
    }
    console.log(`No. of occurances of ${searchString} in file : ${n}`);
    //method 2
    var re = new RegExp(searchString, "g");
    if((s.match(re))!=null)
        console.log(`No. of occurances of ${searchString} in file : ${(s.match(re)).length}`);
    else
        console.log("not found");
}) 
readerStream.on ('error', function (err) { 
    console.error("Error is "+err); 
})

