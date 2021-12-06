var dns = require ("dns"); 
const { hostname } = require("os"); 
dns.lookup ('www.google.co.in', (err, address, family) => { 
    console.log("Address : "+address); 
    console.log("Family : "+ family); 
}) 
dns.resolve4 ('www.swiggy.com', (err, addresses) => { 
    if (err) throw err; 
    console.log("All the IP Addresses of wwww.swiggy.com"+ JSON.stringify(addresses)); 
    addresses.forEach ( (a) => { 
        dns.reverse (a, (err, hostname) => { 
            if (err) throw err; 
            console.log( `IP Address : ${a} and its hostname : ${hostname}`); 
        }) 
    }) 
})