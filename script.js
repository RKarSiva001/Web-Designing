function login(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if((name=="Admin" && password=="admin") || (name=="User" && password=="user")){
        alert("Logged in successfully!!!")
        return true;
    }
    else if(name!="Admin" || name=""){
        alert("Enter correct Username");
        return false;
    }
    else if(password!="admin" || password=""){
        alert("Enter correct Password");
        return false;
    }
    else{
        
    }
}