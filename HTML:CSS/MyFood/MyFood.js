function login_validation(){
var username=document.getElementById("login-username").value;
var password=document.getElementById("login-password").value;
if(username=="" || password==""){
    alert("plese enter both username and password");
    return false;
}
else if(username.indexOf(' ')>-1){
    alert("username should not have any blank space.");
}
return true;
}

function registration_validation(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm_password").value;
    if (username=="" || email=="" || password=="" || confirm_password==""){
        alert("Fill all the fields.");
        return false;
    }
    if(email.slice(email.length-10,email.length)!="@gmail.com"){
        alert("email should end with '@gmail.com'.");
    }
    if(password!=confirm_password){
        alert("password do not match");
    }
    return true;
}