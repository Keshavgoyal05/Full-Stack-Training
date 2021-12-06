var customMathOperation = require("./Assignment2");

describe ('Custom Math Operation Suite', () => { 

    test ("testing maximum between 2 numbers", ()=> { 
        
        expect (customMathOperation.maxOf2(3,7)).toEqual (7); 
        expect (customMathOperation.maxOf2(0,7)).toEqual (7); 
        expect (customMathOperation.maxOf2(3,-7)).toEqual (3);
        expect (customMathOperation.maxOf2(-3,-7)).toEqual (-3);  
    }) 
    test ("testing maximum between 3 numbers", ()=> { 
        
        expect (customMathOperation.maxOf3(3,7,4)).toEqual (7);
        expect (customMathOperation.maxOf3(0,7,4)).toEqual (7);
        expect (customMathOperation.maxOf3(-3,-7,4)).toEqual (4);
        expect (customMathOperation.maxOf3(-3,-1,-4)).toEqual (-1); 

    }) 
    test ("testing factorial of a number", ()=> { 
        
        expect (customMathOperation.fac(4)).toEqual (24);
        expect (customMathOperation.fac(0)).toEqual (1);
        expect (customMathOperation.fac(1)).toEqual (1);
        expect (customMathOperation.fac(-2)).toEqual (-1); 
    }) 
    test ("testing if number is even or not", ()=> { 
        expect (customMathOperation.isEven(6)).toBeTruthy(); 
        expect (customMathOperation.isEven(5)).toBeFalsy();
        expect (customMathOperation.isEven(-4)).toBeTruthy();
        expect (customMathOperation.isEven(-5)).toBeFalsy();
        expect (customMathOperation.isEven(0)).toBeTruthy(); 
    }) 
    test ("testing maximum element in arr", ()=> { 
        
        expect (customMathOperation.max([3,1,0,-4,6])).toEqual (6);
        expect (customMathOperation.max([-3,-1,-4,-6])).toEqual (-1); 
    }) 
    
    test("tesing whether search element in array or not", () => { 
        expect (customMathOperation.search([3,1,0,-4,6],1)).toBeTruthy();
        expect (customMathOperation.search([-3,-1,-4,-6],9)).toBeFalsy();
    }) 

})