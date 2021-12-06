import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  baseURL = "http://localhost:8000";

 
  LoginUser(loginObj : any) : Observable<any> {
    var URL = this.baseURL + "/loginUser"; 
    let header ={'content-type' : 'application/json'}; 
    // console.log ("Data to be inserted in the db.json : "+body) 
    return this.http.post(URL, loginObj, {'headers' : header , responseType : 'text'}) ; 
  } 
  RegisterUser (registerObj : any) : Observable<any> { 
    var URL = this.baseURL + "/registerUser"; 
    let header ={'content-type' : 'application/json'}; 
     console.log ("Data to be inserted in the db.json : "+registerObj + JSON.stringify(registerObj)); 
    return this.http.post(URL, registerObj, {'headers' : header , responseType : 'text'}); 
  } 
  
}
