import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/users";

  getUsers() {
    return this.http.get <Register[]>(this.URL);
  }

}
