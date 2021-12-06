var array:number[]=[3,5,2,7,1,5,9,6,20];
var key:number=6,pos:number;
var flag:boolean=false;
array.forEach(function (element) {
    if(element==key){
        flag=true;
        pos=array.indexOf(element);
        return;
    }
});
if(flag)
    console.log(`your key ${key} is present in array ${array} at position ${pos+1}`);
else
    console.log('your key is not present i array');