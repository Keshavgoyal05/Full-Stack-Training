import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  varIsLoggedIn="isLoggedIn"; 
  login() 
  { 
    localStorage.setItem (this.varIsLoggedIn, 'true') ; 
    // alert ("Set the is Logged in to true") ; 
  } 
  logout() 
  { 
    localStorage.setItem (this.varIsLoggedIn, 'false'); 
    // alert ("Set the isLogged in to false"); 
  }
}
