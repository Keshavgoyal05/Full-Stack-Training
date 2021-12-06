function greatestAmongThreeNumbers(a:number,b:number,c:number):number{
    var ans:number;
    if(a>=b && a>=c)
        ans=a;
    else{
        if(a>b && a<c){
            ans=c;
        }
        else if(a>c && a<b){
            ans=b;
        }
        else{
            if(b>c)
                ans=b;
            else
                ans=c;
        }
    }
    
    return ans;
}

function smallestAmongThreeNumbers(a:number,b:number,c:number):number{
    var ans:number;
    if(a<=b && a<=c)
        ans=a;
    else{
        if(a<b && a>c){
            ans=c;
        }
        else if(a<c && a>b){
            ans=b;
        }
        else{
            if(b<c)
                ans=b;
            else
                ans=c;
        }
    }
    
    return ans;
}


console.log(`Maximum of 1,7,13 is ${greatestAmongThreeNumbers(1,7,13)}`);
console.log(`Minimum of 1,7,13 is ${smallestAmongThreeNumbers(1,7,13)}`);