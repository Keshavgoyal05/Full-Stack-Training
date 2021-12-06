import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http:HttpClient) { }

  baseURL = "http://localhost:8000";
  getInsurances() : Observable<any> { 
    var URL = this.baseURL + "/getAllPolicies"; 
    return this.http.get(URL); 
  } 
  //Gets the employee data by id. 
  getInsuranceById(id : number) : Observable<any> { 
    var URL = this.baseURL + "/getPolicyById/" + id; 
    return this.http.get(URL); 
  }
  insertData (insuranceObj : any) : Observable<any> {
    var URL = this.baseURL + "/insertPolicy"; 
    let header ={'content-type' : 'application/json'}; 
    // console.log ("Data to be inserted in the db.json : "+body) 
    return this.http.post(URL, insuranceObj, {'headers' : header , responseType : 'text'}) ; 
  } 
  editData (insuranceObj : any) : Observable<any> { 
    var URL = this.baseURL + "/updatePolicy"; 
    let header ={'content-type' : 'application/json'}; 
    // console.log ("Data to be inserted in the db.json : "+body) 
    return this.http.put(URL, insuranceObj, {'headers' : header , responseType : 'text'}); 
  } 
  deleteRecord(id : number) : Observable<any> {
    let URL = this.baseURL + "/deletePolicy/" + id; 
    console.log ("URL : "+URL); 
    return this.http.delete(URL, {responseType : 'text'}); 
  }
}
