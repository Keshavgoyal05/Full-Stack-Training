import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private student : StudentService,private formbuilber : FormBuilder) { }

  form ! : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.form = this.formbuilber.group({
      s_id : ['',Validators.required],
      name : ['',Validators.required],
      stream : ['',Validators.required],
      marks : ['',Validators.required],
      address : ['',Validators.required],
      location : ['',Validators.required],
      pincode : ['',Validators.required],
      state : ['',Validators.required],
      phone : ['',[Validators.required,Validators.maxLength(10)]] 
    })
    this.readStudentData();
  }
  get f(): { [key: string]: AbstractControl } {
    console.log(this.form.controls);
    return this.form.controls;
  }
  

  student_column=["SID", "Name", "Stream", "Marks", "Address",'location','pincode','state','phone'];
  arrStudent : any[]=[]; 
  readStudentData() 
  { 
    this.student.getData().subscribe
    ( 
      (data) => 
      { 
        this.arrStudent = data; 
      }, 
      (error) => console.log (error)
    );
  }
  showAdd !: boolean;
  showUpdate !: boolean;
  clickAddButton(){
    this.close();
    this.showAdd=true;
    this.showUpdate=false;
  }
  insertStudentRecord()
  { 
    
    this.submitted = true;
    if(this.form.invalid){
      alert("fill all details pls");
      return;
    }
    else{
      let studentobj = {
        "s_id" : this.form.value.s_id, 
        "name" : this.form.value.name, 
        "stream" : this.form.value.stream,
        "marks" : this.form.value.marks,
        "address" : this.form.value.address, 
        "location" : this.form.value.location, 
        "pincode" : this.form.value.pincode,
        "state" : this.form.value.state,
        "phone" : this.form.value.phone
      }
      this.student.insertData(studentobj).subscribe 
      ( 
        (data) => 
        { 
          console.log("Inserted data is "+data);
          alert(data); 
          this.readStudentData(); 
          this.close();
        }, 
        (error) => {
          alert(JSON.stringify(error));
          console.log("Unabled to insert record because" + error.getMessage)
        }
      );
    } 
  } 
  deleteStudentRecord(id:number) 
  { 
    this.student.deleteRecord(id).subscribe 
    ( 
      (data) => 
      { 
        alert(data); 
        this.readStudentData(); 
      }, 
      (error) => console.log ("Unabled to delete record because " + error.getMessage) 
    );
  }
  onEditStudentRecord(row:any){
    this.close();
    this.showAdd=false;
    this.showUpdate=true;
    this.form.controls['s_id'].setValue(row.s_id); 
    this.form.controls['name'].setValue(row.name);
    this.form.controls['stream'].setValue(row.stream);
    this.form.controls['marks'].setValue(row.marks);
    this.form.controls['address'].setValue(row.address); 
    this.form.controls['location'].setValue(row.location);
    this.form.controls['pincode'].setValue(row.pincode);
    this.form.controls['state'].setValue(row.state);
    this.form.controls['phone'].setValue(row.phone); 
  }
  editStudentRecord()
  {
    this.submitted = true;
    if(this.form.invalid){
      alert("fill all details pls");
      return;
    }
    else{
      let studentobj = {
        "s_id" : this.form.value.s_id, 
        "name" : this.form.value.name, 
        "stream" : this.form.value.stream,
        "marks" : this.form.value.marks,
        "address" : this.form.value.address, 
        "location" : this.form.value.location, 
        "pincode" : this.form.value.pincode,
        "state" : this.form.value.state,
        "phone" : this.form.value.phone
      }
      this.student.editData(studentobj).subscribe 
      ( 
        (data) => 
        { 
          alert(data);
          console.log("Edited data is "+data); 
          this.readStudentData(); 
          this.close();
        }, 
        (error) => {
          alert(JSON.stringify(error));
          console.log("Unabled to insert record because" + error.getMessage)
        }
      ); 
    }
    
  }

  close(){
    this.submitted = false;
    this.form.reset();
  }
}
