import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  baseURL = "http://localhost:8000";
  getData() : Observable<any> { 
    var URL = this.baseURL + "/getAllStudents"; 
    return this.http.get(URL); 
  } 
  
  insertData (studentObj : any) : Observable<any> {
    var URL = this.baseURL + "/insertStudent"; 
    let header ={'content-type' : 'application/json'}; 
    // console.log ("Data to be inserted in the db.json : "+body) 
    return this.http.post(URL, studentObj, {'headers' : header , responseType : 'text'}) ; 
  } 
  editData (studentObj : any) : Observable<any> { 
    var URL = this.baseURL + "/updateStudent"; 
    let header ={'content-type' : 'application/json'}; 
    // console.log ("Data to be inserted in the db.json : "+body) 
    return this.http.put(URL, studentObj, {'headers' : header , responseType : 'text'}); 
  } 
  deleteRecord(id : number) : Observable<any> {
    let URL = this.baseURL + "/deleteStudent/" + id; 
    console.log ("URL : "+URL); 
    return this.http.delete(URL, {responseType : 'text'}); 
  }
}
