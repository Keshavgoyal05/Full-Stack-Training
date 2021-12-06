var fs = require ("fs"); 
var readline = require ('readline-sync'); 

createFolder = readline.question ("Do you want to create a directory ? y/n : "); 
if(createFolder =='y' || createFolder=="Y"){
    folderToCreate = readline.question ("Enter Directory name that you want to create : "); 
    fs.mkdirSync (folderToCreate); 
    console.log(folderToCreate + " New directory named NewFolder is created...");    
}

deleteFolder = readline.question ("Do you want to delete a directory ? y/n : "); 
if(deleteFolder =='y' || deleteFolder=="Y"){
    folderToDelete = readline.question ("Enter Directory name that you want to delete : "); 
    fs.rmdirSync (folderToDelete); 
    console.log(folderToDelete + " Directory is deleted...");
}

console.log("program end");