export class Register { 
    userid : number = 0;
    firstName : string = ""; 
    lastName : string = ""; 
    email : string = "";
    password : string = "";
    constructor (Id : number, firstName : string, lastName : string,email : string, password : string) 
    { 
        this.userid=Id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
    } 
}