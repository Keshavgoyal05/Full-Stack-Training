let inum:number=10;
let str1:string='Keshav';
let bool:boolean=true;
let anydatatype:any=200;
console.log("my number is "+typeof(inum)+" "+inum);
console.log("my name is "+typeof(str1)+" "+str1);
console.log("bool data is "+typeof(bool)+" "+bool);
console.log("any data type value is "+typeof(anydatatype)+" "+anydatatype);

anydatatype=false;
console.log("any data type value is "+typeof(anydatatype)+" "+anydatatype);

anydatatype="changed text for anydatatype";
console.log("any data type value is "+typeof(anydatatype)+" "+anydatatype);
