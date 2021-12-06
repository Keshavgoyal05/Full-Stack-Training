import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  user_column=["User Id", "First Name", "Last Name", "Email", "Password"];
  arrUsers : Register[] = []; 

  getAllUsers() { 
    this.userService.getUsers().subscribe
    ( 
      (data) => 
      { 
        this.arrUsers = data; 
      }, 
      (error) => console.log (error)
    );
  }

  searchById = '';
  searchByName = '';
  clear(){
    this.searchById = '';
    this.searchByName = '';
  }

}
