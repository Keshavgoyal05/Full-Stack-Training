export class Insurance { 
    id : number = 0;
    policyHolderName : string = ""; 
    policyAmount : number = 0; 
    emiAmount : number = 0;
    nomineeName : string = "";
    constructor (policyNo: number, policyHolderName : string, policyAmount : number,emiAmount : number,nomineeName : string) 
    { 
        this.id=policyNo;
        this.policyHolderName=policyHolderName;
        this.policyAmount=policyAmount;
        this.emiAmount=emiAmount;
        this.nomineeName=nomineeName;
    } 
}