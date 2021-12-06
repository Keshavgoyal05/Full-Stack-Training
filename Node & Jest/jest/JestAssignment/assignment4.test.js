var matcher = require("./Assignment4"); 

describe ('User Suite', () => { 
    test ("checking login function", ()=> { 
        expect (matcher.login(102,'admin12')).toBe('Valid user');
        expect (matcher.login(102,'adn12')).toBe('Invalid user');
        expect (matcher.login(101,'admin12')).toBe('Invalid user');
    })

    test ("checking register function", ()=> { 
        user={uid: 102,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register failed : User already exist');
        user={uid: 105,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register success');
        user={uid: 105,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register failed : User already exist');
        user={uid: 106,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register success');
        user={uid: "abc",pwd:"admin22",role: "admin",};
        expect (matcher.registration(user)).toBe('register failed');
    }) 

    test ("testing register and login together", ()=> { 
        user={uid: 102,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register failed : User already exist');
        expect (matcher.login(user.uid,user.pwd)).toBe('Valid user'); 
        user={uid: 107,pwd: "admin12",role: "admin",};
        expect (matcher.registration(user)).toBe('register success');
        expect (matcher.login(user.uid,user.pwd)).toBe('Valid user');
    }) 
})