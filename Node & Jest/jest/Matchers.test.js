var matchers = require ("./Matchers"); 
describe ('Matchers Suite', () => { 

    test ("Comparing objects with toBe() and toEqual()", ()=> { 
        var empobj = {"id" : 101, "name" : "Keshav", "dept" : "IT", "Designation" : "Software Developer"} 
        
        //expect (matchers.returnObject()).toBe (empobj); 
        expect (matchers.returnObject()).toEqual (empobj); 
    }) 
    
    test("to use Matcher .not.toBeNull() with an object", () => { 
        var empobj = matchers.returnObject(); 
        console.log("Returned data from the functions is "+JSON.stringify(empobj)); 
        expect (empobj).not.toBeNull(); 
    }) 

    test ('Use the Matchers toBeTruthy() and toBeFalsy()', () => { 
        var bData = true; 
        expect (bData).toBeTruthy(); //For boolean data, it looks for true. 
        var empobj = matchers.returnObject(); 
        expect(empobj).toBeTruthy(); //For Object, the object should contain some value or point to a memory location. 
        bData = false; 
        //toBeFalsy() --> will look for false in boolean variable and null in the object. 
        expect (bData).toBeFalsy(); 
        
        empobj = null; 
        expect (empobj).toBeFalsy();
    })

    test('to Use Matcher toContain() and checking the content of the array for a name', () => { 
        var strNameToSearchFor = 'Keshav'; 
        expect (matchers.returnArrNames()).toContain (strNameToSearchFor); 
    })

    beforeAll( () => { 
        console.log("beforeAll()"); 
    }) 

    beforeEach( () => { 
        console.log("In BeforeEach() "); 
    }) 

    afterEach( () =>{ 
        console.log("In afterEach()"); 
    }) 
    
    afterAll( () => { 
        console.log("afterall()"); 
    })

})