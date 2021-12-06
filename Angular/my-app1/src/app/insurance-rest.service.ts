import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceRestService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/insurances";

  getInsurances() : Observable<any> {
    return this.http.get <Insurance[]>(this.URL);
  }

  insertData (insuranceobj : Insurance) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(insuranceobj); 
    console.log ("Data to be insert in the insuranceDB.json is : "+body); 
    return this.http.post(this.URL, body, {'headers' : header}); 
  } 
  deleteRecord(iRecord : number) : Observable<any> 
  {  
    let deleteURL = this.URL + "/" + String(iRecord); 
    console.log ("UR1 : "+deleteURL); 
    return this.http.delete(deleteURL); 
  }
  editData (insuranceobj : Insurance, id :any) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(insuranceobj); 
    console.log ("Data to be insert in the insuranceDB.json is : "+this.URL+body+ "id="+ id); 
    return this.http.put<any>(this.URL+"/"+id,body, {'headers' : header}); 
  } 

}
