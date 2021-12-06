import { Component } from '@angular/core';
import { Products } from './product';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';
import { StudentComponent } from './student/student/student.component';
import { UserRestService } from './user-rest.service';
import { User } from './user';
import { Insurance } from './insurance';
import { InsuranceRestService } from './insurance-rest.service';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private formbuilber : FormBuilder, private authenticationServiceObj : AuthenticationService ,private productServiceObj : ProductService, private loggerServiceObj : LoggerService, private userRestServiceObj : UserRestService, private insuranceRestServiceObj : InsuranceRestService )
  {

  } 
  formValue ! : FormGroup; 
  ngOnInit()
  { 
    this.formValue = this.formbuilber.group({ 
      policyNo : [''], 
      policyHolderName : [''], 
      policyAmount : [''],
      emiAmount : [''],
      nomineeName : ['']
    })
    this.readInsuranceData();  
    this.readUserData();
  }

  title = 'my-app1';
  inumber=100;
  str="string interpolation";
  user={uid:"keshav",pwd:"admin"};
  imgURL="./assets/demo-image.jpeg";
  insuranceObj={policyNo:100, policyHoldersName:"Rajat Sharma", 
  AmountOnMaturity:1000, Nominee:"Raman Sharma",EMI:2500 , Duration:12};

  bDisableButton=false;
  EnableButton(){
    this.bDisableButton=false;
  }
  DisableButton(){
    this.bDisableButton=true;
  }
  verifyEmail(email:string){
    alert("pls check your mail box to verify this email");
  }
  verifyPhone(phone:string){
    if(phone.length!=10)
      alert("Phone is not valid");
    else
      alert("phone is valid");
  }
  result=""
  validateLogIn(username:string,password:string){
    if(username=="keshav" && password=="admin"){
      //alert("You are ready to go!");
      this.result="valid user";}
    else{
      //alert("Invalid Credentials!");
      this.result="invalid user";}
  }

  NumberTwoWayDataBinding=5;

  //calling msg from parent to child
  strParentToChild="I am in parent";
  objectParentToChild={uid:'keshav',pwd:'admin'};

  bCustomer=true;
  changeToCustomer(){
    this.bCustomer=true;
  }
  changeToEmployee(){
    this.bCustomer=false;
  }
  strColor = "white"; strFontSize = "20"; strCustomer="yes";BackgroundColor="green";border1="3px solid black";
  userList = [{uid : 101, name : 'Keshu'}, 
  {uid : 102, name : 'Gattu'}, 
  {uid : 103, name : 'Keshav'}, 
  {uid : 104, name : 'Ram'}, 
  {uid : 105, name : 'Naman'}];

  userList2 = [ {uid : 101, name : 'Keshu', pwd : 'admin'}, 
  {uid : 102, name : 'Yash', pwd : 'admin'}, 
  {uid : 103, name : 'Keshav', pwd : 'admin'}, 
  {uid : 104, name : 'Ram', pwd : 'admin'}, 
  {uid : 105, name : 'Naman', pwd : 'admin'} ];

  bMorning = false; 
  bEvening = false; 
  goodMorning() { 
    //alert ("Hey, its morning, good morning.."); 
    this.bMorning = true; this.bEvening = false; 
  } 
  goodEvening() {
   //alert ("Hey, its evening, good evening.."); 
    this.bEvening = true; this.bMorning = false; 
  }

  strData='1';
  login = true; 
  signin = false; 
  Login() {  
    this.login = true; this.signin = false; 
  } 
  Signin() { 
    this.signin = true; this.login = false; 
  }

  strDataToConvert = "My name is Keshav";
  startIndex=0;
  lastIndex=0;

  iCurrencyData = 35000;
  todayDateInMillis = Date.now(); 
  todaysDateInDateObj = new Date(); 
  todaysDateInStringFormat = new Date().toDateString();
  jsonUserObj = {"uid" : 120, "name" : "pallav", "pwd" : "admin"}; 
  jsonStudentobjs = [ { "id" : 102, "name" : "charan", "stream" : "CS", "marks" : 67}, 
  { "id" : 103, "name" : "Dhanasri", "stream" : "CS", "marks" : 76}, 
  { "id" : 104, "name" : "Manikant", "stream" : "IT", "marks" : 89} ];
  iDataForDecimalPipe = 250.21398424;
  iDataForPercentPipe =  2.56767;
  strDataForslicePipe = 'Keshav Goyal';

  iFarent = 0; iCelcius = 0;
  purevalue = 1;
  impurevalue = 1;
  strToCapitalize = "hello this is keshav";

  //working with users list to try custom filter pipe
  nameString='';
  users=[
    {firstName:'Keshav',lastName:'Goyal',dept:'Finance',salary:500000,doj:new Date('2021-09-13')},
    {firstName:'Gattu',lastName:'Sharma',dept:'Finance',salary:500000,doj:new Date('2021-09-13')},
    {firstName:'Naman',lastName:'Butteri',dept:'Finance',salary:500000,doj:new Date('2021-09-13')},
    {firstName:'Jayant',lastName:'Singh',dept:'Finance',salary:500000,doj:new Date('2021-09-13')}
  ];
  addUserEnable=false;
  
  enableAddUser(){
    this.addUserEnable=true;
  }
  addUser(firstname:string,lastname:string,dept:string,salary:string,doj:string){
    this.users.push({
      firstName:firstname,
      lastName:lastname,
      dept:dept,
      salary:parseInt(salary),
      doj:new Date(doj)});

    this.addUserEnable=false;
  }
  clear(){
    this.addUserEnable=false;
  }
  reset(){
    this.users=this.users.slice(0,4);
  }

  //Informing angular to create the object of ProductService to use the functions of Product Service. 
  arrProdutsObjs : Products[]=[]; 
  searchById='';searchByName='';
  
  getProductData() 
  {
    this.loggerServiceObj.log ("Warning","app.component.ts","getProductData","Before fetching the records from products service..."); 
    this.arrProdutsObjs = this.productServiceObj.getAllProducts();
    this.loggerServiceObj.log ("Success","app.component.ts","getProductData","After fetching the records from products service..."); 
  }
  addProduct(productId:string,productName:string,cost:string){
    var p1 = new Products(parseInt(productId),productName,parseInt(cost));
    this.productServiceObj.addProduct(p1);
    this.addUserEnable=false;
  }
  deleteProduct(id:number){
    this.productServiceObj.deleteProduct(id);
  }


  //calling msg from child to parent
  strMsgFromChild = "" ;
  objectListFromChild:any="";
  getMessage(msg : any) 
  { 
    this.strMsgFromChild = msg;
  }
  getProductList(obj :any)
  {
    this.objectListFromChild=obj;
  }

  //working with student component
  dataFromStudentComponent="";
  getDataFromAnotherComponent() 
  { 
    let studentComponentobj = new StudentComponent(); 
    this.dataFromStudentComponent="Data sent from Student Component from Student Module is "+studentComponentobj.getName();
    console.log("Data sent from Student Component from Student Module is "+studentComponentobj.getName());
  }

  //working with User Rest Service
  user_column=["User Id", "First Name", "Last Name", "Email", "Location",'Action'];
  arrUsers : User[]=[]; 
  
  readUserData() 
  { 
    this.userRestServiceObj.getUsers().subscribe
    ( 
      (data) => 
      { 
        this.arrUsers = data; 
      }, 
      (error) => console.log (error)
    );
  }
  insertUserRecord(userid:string,firstname:string,lastname:string,email:string,location:string)
  { 
    let userobj = new User (parseInt(userid), firstname, lastname, email, location); 
    this.userRestServiceObj.insertData(userobj).subscribe 
    ( 
      (data) => 
      { 
        console.log("Inserted data is "+data); 
        this.readUserData(); 
      }, 
      (error) => console.log("Unabled to insert record because" + error)
    ); 
  } 
  deleteUserRecord(id:number) 
  { 
    this.userRestServiceObj.deleteRecord((id)).subscribe 
    ( 
      (data) => 
      { 
        this.readUserData(); 
      }, 
      (error) => console.log ("Unabled to delete record because" + error) 
    );
  }

  //working with Insurance Rest Service
  insurance_column=["Insurance Policy No.", "Policy Holder Name", "Policy Amount", "EMI Amount", "Nominee Name",'Action'];
  arrInsurance : Insurance[]=[]; 
  readInsuranceData() 
  { 
    this.insuranceRestServiceObj.getInsurances().subscribe
    ( 
      (data) => 
      { 
        this.arrInsurance = data; 
      }, 
      (error) => console.log (error)
    );
  }
  showAdd !: boolean;
  showUpdate !: boolean;
  clickAddButton(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }
  insertInsuranceRecord()
  { 
    let insuranceobj = new Insurance (
      this.formValue.value.policyNo, 
      this.formValue.value.policyHolderName, 
      this.formValue.value.policyAmount, 
      this.formValue.value.emiAmount, 
      this.formValue.value.nomineeName); 
    this.insuranceRestServiceObj.insertData(insuranceobj).subscribe 
    ( 
      (data) => 
      { 
        console.log("Inserted data is "+data); 
        this.readInsuranceData();
         
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    ); 
  } 
  deleteInsuranceRecord(id:number) 
  { 
    this.insuranceRestServiceObj.deleteRecord(id).subscribe 
    ( 
      (data) => 
      { 
        this.readInsuranceData(); 
      }, 
      (error) => console.log ("Unabled to delete record because " + error.getMessage) 
    );
  }
  onEditInsuranceRecord(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['policyNo'].setValue(row.id); 
    this.formValue.controls['policyHolderName'].setValue(row.policyHolderName);
    this.formValue.controls['policyAmount'].setValue(row.policyAmount);
    this.formValue.controls['emiAmount'].setValue(row.emiAmount);
    this.formValue.controls['nomineeName'].setValue(row.nomineeName);
    
  }
  editInsuranceRecord()
  {
    let insuranceobj = new Insurance (
      this.formValue.value.policyNo, 
      this.formValue.value.policyHolderName, 
      this.formValue.value.policyAmount, 
      this.formValue.value.emiAmount, 
      this.formValue.value.nomineeName); 
    this.insuranceRestServiceObj.editData(insuranceobj,this.formValue.value.policyNo,).subscribe 
    ( 
      (data) => 
      { 
        console.log("Edited data is "+data); 
        this.readInsuranceData(); 
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    ); 

  }
  


  //for query string params
  strUIDForQueryParams = "keshav";
  strPWDForQueryParams = "Admin";

  // for using AuthGuards
  logInForAuthGuard() { this.authenticationServiceObj.login(); } 
  logoutForAuthGuard() { this.authenticationServiceObj.logout(); }

}
