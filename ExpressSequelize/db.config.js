module.exports = { 
    HOST : "localhost", 
    USER : "root", 
    PASSWORD: "Admin@keshav", 
    DB : "training", 
    dialect : "postgres", 
    pool : 
    { 
        max : 5, 
        min : 0, 
        acquire : 30000, 
        idle : 10000 
    } 
};