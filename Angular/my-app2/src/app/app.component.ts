import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponent]
})
export class AppComponent implements OnInit {
  title = 'my-app2';
  login : any = false;
  totalCartItem : any ;

  constructor(private authenticationService : AuthenticationService){
    this.username1 =localStorage.getItem('username');

  }
  username1 :any;
  ngOnInit(){
    this.totalCartItem = localStorage.getItem("totalCartItem");
    //this.username1 =localStorage.getItem('username'); 
  }

  logout(){
    localStorage.setItem (this.authenticationService.varIsLoggedIn, 'false') ;
    this.login=false;
    localStorage.removeItem('username');
    localStorage.removeItem('totalCartItem');
  }

  ngDoCheck(){
    if(localStorage.getItem(this.authenticationService.varIsLoggedIn)=='true'){
      this.login=true;
    this.username1 =localStorage.getItem('username');
    }
  }

}
