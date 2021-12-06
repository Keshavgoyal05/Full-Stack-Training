import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceService } from 'src/app/service/insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private insurance : InsuranceService,private formbuilber : FormBuilder) { }

  form ! : FormGroup;
  ngOnInit(): void {
    this.form = this.formbuilber.group({ 
      policy_no : [''], 
      policyHolderName : [''], 
      policyAmount : [''],
      maturityAmount : [''],
      nominee : ['']
    })
    this.readInsuranceData();
  }

  insurance_column=["Policy No.", "Policy Holder Name", "Policy Amount", "Maturity Amount", "Nominee Name",'Action'];
  arrInsurance : any[]=[]; 
  readInsuranceData() 
  { 
    this.insurance.getInsurances().subscribe
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
    this.form.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }
  insertInsuranceRecord()
  { 

    let insuranceobj = {
      "policy_no" : this.form.value.policy_no, 
      "policyHolderName" : this.form.value.policyHolderName, 
      "policyAmount" : this.form.value.policyAmount,
      "maturityAmount" : this.form.value.maturityAmount,
      "nominee" : this.form.value.nominee
    }
    this.insurance.insertData(insuranceobj).subscribe 
    ( 
      (data) => 
      { 
        console.log("Inserted data is "+data);
        alert(data); 
        this.readInsuranceData(); 
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    ); 
  } 
  deleteInsuranceRecord(id:number) 
  { 
    this.insurance.deleteRecord(id).subscribe 
    ( 
      (data) => 
      { 
        alert(data); 
        this.readInsuranceData(); 
      }, 
      (error) => console.log ("Unabled to delete record because " + error.getMessage) 
    );
  }
  onEditInsuranceRecord(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.form.controls['policy_no'].setValue(row.policy_no); 
    this.form.controls['policyHolderName'].setValue(row.policyHolderName);
    this.form.controls['policyAmount'].setValue(row.policyAmount);
    this.form.controls['maturityAmount'].setValue(row.maturityAmount);
    this.form.controls['nominee'].setValue(row.nominee);  
  }
  editInsuranceRecord()
  {
    let insuranceobj = {
      "policy_no" : this.form.value.policy_no, 
      "policyHolderName" : this.form.value.policyHolderName, 
      "policyAmount" : this.form.value.policyAmount,
      "maturityAmount" : this.form.value.maturityAmount,
      "nominee" : this.form.value.nominee
    }
    this.insurance.editData(insuranceobj).subscribe 
    ( 
      (data) => 
      { 
        alert(data);
        console.log("Edited data is "+data); 
        this.readInsuranceData(); 
      }, 
      (error) => console.log("Unabled to insert record because" + error.getMessage)
    ); 
  }
}
