const Matchers = { 
    returnObject : function(){ 
        var empobj = {"id" : 101, "name" : "Keshav", "dept" : "IT", "Designation" : "Software Developer"} 
        return empobj; 
    }, 

    returnURL : function(){ 
        var strURL = "http://www.google.com"; 
        return strURL; 
    }, 
    returnArrNames : function() { 
        var arrNames = ['Charan', 'Gyan', 'Prakash', 'Pallav', 'Mukta', 'Dhanasri', 'Keshav']; 
        return arrNames; 
    },
} 
module.exports=Matchers;