var a:number=0;
var b:number=1;
var arr=new Array();
arr.push(a);
arr.push(b);
for(var i=2;i<=9;i++){
    var c=a+b;
    a=b;
    b=c;
    arr.push(c);
}
console.log(`first 10 fib numbers are ${arr}`);
