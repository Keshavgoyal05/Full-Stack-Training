import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/products?category=clothes";

  getProducts() {
    return this.http.get <Product[]>(this.URL);
  }
}
