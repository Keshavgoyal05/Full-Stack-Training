User=[
    {
        uid: 101, 
        pwd: "admin1", 
        role: "admin",
    },
    {
        uid: 102, 
        pwd: "admin12", 
        role: "user",
    },
    {
        uid: 103, 
        pwd: "admin123", 
        role: "user",
    },
    {
        uid: 104, 
        pwd: "admin1234", 
        role: "user",
    }
]

function login(uid1,pwd1){
    let user= User.find(user => (user.uid==uid1 && user.pwd==pwd1));
    console.log("user : "+ user);
    if(user==undefined)
        return "Invalid user";
    else
        return "Valid user";
}

function registration(userObj){
    try{
        if(typeof(userObj.uid)=='string')
            throw console.error("user id should be integer only");
        var user= User.find(x => (x.uid==userObj.uid));
        if(user==undefined){
            User.push({
                uid: userObj.uid, 
                pwd: userObj.pwd, 
                role: userObj.role,
            })
            return "register success"
        }
        else
            return "register failed : User already exist";   
    }
    catch{
        return "register failed";
    }
}



module.exports={User,login,registration};