
 function LoginFun(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var loginErrorMsg = document.getElementById("login-error-msg-holder");
    
    var loginObj ={
        user : username,
        pass : password,
    }

    if (loginObj.user === "admin" && loginObj.pass=== "123") {
        loginErrorMsg.innerHTML = "<span>Welcome</span>";
  
    } else {
        loginErrorMsg.innerHTML= "<span>Not registered</span>";
    }
 }
