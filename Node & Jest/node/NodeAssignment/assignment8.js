var dns = require ("dns"); 
const { hostname } = require("os"); 
var readline = require ('readline-sync'); 

domainName = readline.question ("Enter a Domain Name : "); 

dns.lookup (domainName, (err, address, family) => { 
    console.log("Address : "+address); 
    console.log("Family : "+ family); 
}) 
dns.resolve4 (domainName, (err, addresses) => { 
    if (err) throw err; 
    console.log(`All the IP Addresses of ${domainName} is ${JSON.stringify(addresses)}`); 
    addresses.forEach ( (a) => { 
        dns.reverse (a, (err, hostname) => { 
            if (err) throw err; 
            console.log( `IP Address : ${a} and its hostname : ${hostname}`); 
        }) 
    }) 
})