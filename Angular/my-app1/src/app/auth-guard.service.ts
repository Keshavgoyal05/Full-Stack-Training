import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router) { }

  canActivate(){
    let bReturn = true; 
    //alert ("Data from LocalStore from AuthGuardService, is the user Logged in "+localStorage.getItem("isLoggedIn")) 
    if (localStorage.getItem('isLoggedIn') == 'false') 
    { 
      alert ("Sorry, you are not allowed to view this page.."); 
      this.router.navigate (['/home']); 
      bReturn = false; 
    } 
    return bReturn;
  }


}
