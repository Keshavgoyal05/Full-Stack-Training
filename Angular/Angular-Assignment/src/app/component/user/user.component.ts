import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import Validation from 'src/app/validation/validation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private formbuilber : FormBuilder, private user : UserService) { }

  
  form : FormGroup = new FormGroup({
    user_id : new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword : new FormControl('')
  }); 
  submitted = false;
  ngOnInit(){ 
    this.form = this.formbuilber.group({
      id: ['',], 
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', [Validators.required,Validators.email]], 
      password : ['', [Validators.required,Validators.maxLength(20)]],
      confirmPassword : ['',Validators.required]
    },
    {
      validators: [Validation.checkPassword('password'),Validation.matchPassword('password','confirmPassword')]
    });    
  }

  get f(): { [key: string]: AbstractControl } {
    console.log(this.form.controls);
    return this.form.controls;
  }
  
  login(){
    this.submitted = true;
    let email =this.form.value.email;
    let password=this.form.value.password;
    var userObj = {
      "email" : email,
      "password" : password
    }
    if(this.form.controls['email'].invalid || this.form.controls['password'].invalid){
      //alert("Pls provide Email id & Password");
      return;
    }
    else{
      this.user.LoginUser(userObj).subscribe 
      ( 
        (data) => 
        {
          alert(data);
          console.log("login : success");
          this.close();
        }, 
        (error) => 
        {
          alert(JSON.stringify(error));
          console.log("Login failed" + error.getMessage);
        }
      );
    }
  }

  register(){
    this.submitted = true;
    if(this.form.invalid){
      alert("fill all details pls");
      return;
    }
    else{
      let register = {
        "user_id" : this.form.value.user_id,
        "firstName" : this.form.value.firstName,
        "lastName" : this.form.value.lastName,
        "email" : this.form.value.email,
        "password" : this.form.value.password
      }
      this.user.RegisterUser(register).subscribe 
      ( 
        (data) => 
        { 
          alert(data);
          this.close();    
        }, 
        (error) =>
        {
          console.log("Unabled to insert record because" + error.getMessage);
          alert("Some Issue, Try Later");
        } 
      );
      this.close(); 
    }
  }

  close(){
    this.submitted = false;
    this.form.reset();
  }

}