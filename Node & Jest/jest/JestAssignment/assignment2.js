const customMathOperation = { 
    maxOf2 : function(a,b){ 
        if(a>=b)
            return a;
        return b;
    }, 

    maxOf3 : function(a,b,c){ 
        if (a >= b && a >= c)
            return a;
        else {
            if (a > b && a < c) {
                return c;
            }
            else if (a > c && a < b) {
                return b;
            }
            else {
                if (b > c)
                    return b;
                else
                    return c;
            }
        }
    }, 

    fac : function(n) {
        if(n<0)
            return -1 
        var fac = 1;
        for (var i = 1; i <= n; i++) 
            fac *= i;
        return fac;
    },

    isEven : function(n){
        if(n%2==0)
            return true;
        return false;

    },

    max : function(arr){
        return Math.max(...arr);
    },

    search : function(arr,key){
        var flag = false;
        arr.forEach(function (element) {
            if (element == key) {
                flag = true;
                return;
            }
        });
        return flag;
    }
}

module.exports=customMathOperation;
