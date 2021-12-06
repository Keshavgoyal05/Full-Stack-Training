export class User { 
    id : number = 0;
    firstName : string = ""; 
    lastName : string = ""; 
    email : string = "";
    location : string = "";
    constructor (Id : number, firstName : string, lastName : string,email : string,location : string) 
    { 
        this.id=Id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.location=location;
    } 
}