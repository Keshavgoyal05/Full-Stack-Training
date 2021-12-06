var matcher = require("./Assignment3"); 


describe ('Library Suite', () => { 

    test ("checking if particular book is in library or not", ()=> { 
        expect (matcher.returnBookDataById(103)).not.toBeNull();
        expect (matcher.returnBookDataById(106)).toBeNull();
    }) 

    test('to check whether array of bookid contain particular bookid or not', () => {  
        expect (matcher.returnBookIds()).toContain (102);
        //expect (matcher.returnBookIds()).toContain (107); 
    })

})