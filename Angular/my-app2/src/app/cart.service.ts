import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/cart";

  getCart(userid :number) : Observable<any> {
    let modifiedURL = `http://localhost:3000/cart?userid=${userid}`;
    return this.http.get <Cart[]>(modifiedURL);
  }

  getCartBasedonProduct(productid :number) : Observable<any> {
    let modifiedURL = `http://localhost:3000/cart?productid=${productid}`;
    return this.http.get <Cart[]>(modifiedURL);
  }

  insertData (cartObj : Cart) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(cartObj); 
    console.log ("Data to be insert in the cart.json is : "+body); 
    return this.http.post(this.URL, body, {'headers' : header}); 
  } 
  deleteRecord(iRecord : number) : Observable<any> 
  {  
    let deleteURL = this.URL + "/" + String(iRecord); 
    console.log ("UR1 : "+deleteURL); 
    return this.http.delete(deleteURL); 
  }

  editData (cartObj : Cart, id :any) : Observable<any> 
  { 
    let header = { 'content-type' : 'application/json'}; 
    let body = JSON.stringify(cartObj); 
    console.log ("Data to be insert in the cart.json is : "+this.URL+body+ "id="+ id); 
    return this.http.put<any>(this.URL+"/"+id,body, {'headers' : header}); 
  } 
}
