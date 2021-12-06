import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/users";

  getUsers() {
    return this.http.get <User[]>(this.URL);
  }

  insertData (userobj : User) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(userobj); 
    console.log ("Data to be inserte in the db.json is : "+body); 
    return this.http.post(this.URL, body, {'headers' : header}); 
  } 
  deleteRecord(iRecord : number) : Observable<any> 
  { 
    let deleteURL = this.URL + "/" + String(iRecord); 
    console.log ("UR1 : "+deleteURL); 
    return this.http.delete(deleteURL); 
  }
  editData (userobj : User, id :any) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(userobj); 
    console.log ("Data to be insert in the insuranceDB.json is : "+this.URL+body+ "id="+ id); 
    return this.http.put<any>(this.URL+"/"+id,body, {'headers' : header}); 
  } 
  
}
