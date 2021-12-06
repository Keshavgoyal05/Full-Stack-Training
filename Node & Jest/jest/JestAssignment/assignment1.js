const Calc = { 
    sub : function(a,b){ 
         return a-b;
    }, 

    mult : function(a,b){ 
        return a*b;
    }, 

    div : function(a,b) { 
        if(b!=0){
            return Math.round(a/b * 100) / 100
        }
        else{
            return 'Infinity'
        }
    }
}
module.exports=Calc;
