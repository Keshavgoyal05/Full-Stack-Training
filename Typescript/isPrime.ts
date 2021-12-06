function isPrime(n:number){
    var flag:boolean=true;
    for(var i=2;i<n;i++){
        if(n!=2 && n%i==0){
            flag=false;
            break;
        }
    }
    if(flag)
        console.log(`${n} is a prime number`);
    else
        console.log(`${n} is not a prme number`);
}
isPrime(10);
isPrime(7);