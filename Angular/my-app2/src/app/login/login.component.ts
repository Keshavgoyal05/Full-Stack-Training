import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { Register } from '../register';
import Validation from '../validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService, private formbuilber : FormBuilder, private router : Router) { }

  //formValue ! : FormGroup;
  formValue : FormGroup = new FormGroup({
    id : new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword : new FormControl('')
  }); 
  submitted = false;
  ngOnInit()
  { 
    this.formValue = this.formbuilber.group({
      id: ['',], 
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', [Validators.required,Validators.email]], 
      password : ['', [Validators.required,Validators.maxLength(20)]],
      confirmPassword : ['',Validators.required]
    },
    {
      validators: [Validation.match('password'),Validation.match('confirmPassword')]
    });    
  }
  get f(): { [key: string]: AbstractControl } {
    console.log(this.formValue.controls);
    return this.formValue.controls;
  }
  
  //@Output() messageToEmit = new EventEmitter(); 
  
  login(){
    this.submitted = true;
    let email =this.formValue.value.email;
    let password=this.formValue.value.password;
    //reset() set value to null
    if(this.formValue.controls['email'].invalid || this.formValue.controls['password'].invalid){
      //alert("Pls provide Email id & Password");
      return;}
    else{
    this.authenticationService.login(email).subscribe 
    ( 
      (data) => 
      {
        try
        {
          if(data[0].email==email && data[0].password == password)
          {
            console.log(data);
            alert("welcome");
            localStorage.setItem (this.authenticationService.varIsLoggedIn, 'true') ;
            localStorage.setItem("username",data[0].firstName);
            localStorage.setItem("userid",data[0].id);
            this.close();
            this.router.navigate(['/home']); 
          }
          else{
            alert("invalid credentials"); 
            console.log("invalid credentials");
            this.close(); 
          }
        }
        catch{
          alert("user not found");
          this.close();
        } 
        console.log("keshav");
      }, 
      (error) => console.log("Unabled to find user" + error.getMessage)
    );
    console.log("goyal");
    console.log(this.authenticationService.login(email));
    }
  }

  register(){
    this.submitted = true;
    if(this.formValue.invalid){
      alert("fill all details pls");
      return;
    }
    else{
    let register = new Register (
      this.formValue.value.id,
      this.formValue.value.firstName, 
      this.formValue.value.lastName, 
      this.formValue.value.email, 
      this.formValue.value.password);
      this.authenticationService.register(register).subscribe 
      ( 
        (data) => 
        { 
          alert("Registration success");
          this.router.navigate(['/login']);     
        }, 
        (error) =>
        {
          console.log("Unabled to insert record because" + error.getMessage);
          alert("Some Issue, Try Later");
        } 
      );
      this.submitted = false;
      this.formValue.reset(); }
  }
  close(){
    this.submitted = false;
    this.formValue.reset();
  }

}
