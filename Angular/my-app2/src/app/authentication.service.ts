import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {
    
   }

  URL = "http://localhost:3000/users";
  
  varIsLoggedIn="isLoggedIn";
  
  login(email:string) : Observable<any>{
    let modifiedURL = `http://localhost:3000/users?email=${email}`;
    console.log(modifiedURL);
    return this.http.get<Register[]>(modifiedURL);
  }
  //post
  register(register : Register) : Observable<any>{
    //alert(register);
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(register); 
    console.log ("Data to be inserted in the db.json is : "+body); 
    return this.http.post(this.URL, body, {'headers' : header});
  }
}
