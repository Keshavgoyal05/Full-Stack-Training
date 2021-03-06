var os = require ("os"); 
console.log("Architecture : "+os.arch()); 
console.log("Number of CPUS "+JSON.stringify(os.cpus())); 
console.log("Free memory : : "+os.freemem() + "bytes");
console.log("Home Directory : "+os.homedir());
console.log("Network Interfaces : "+JSON.stringify(os.networkInterfaces()));
console.log("OS Platform : "+os.platform());
console.log("Release of the OS : "+os.release());
console.log("Temporary directory : "+os.tmpdir());
console.log("Total Memory in bytes : "+os.totalmem());
console.log("Operating System name : "+os.type());
console.log("Total uptime of CPU in seconds : "+os.uptime());
