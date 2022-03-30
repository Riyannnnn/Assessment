function view1 () {
    
    var pwd = document.getElementById("password");
    var type = pwd.getAttribute("type")==="password"?"text":"password";
    pwd.setAttribute("type",type);
    var viewpwd = document.getElementById("Newpassword")
    var icon = viewpwd.getAttribute("class")==="fa-solid fa-eye"?"fa-solid fa-eye-slash":"fa-solid fa-eye";
    viewpwd.setAttribute("class",icon);   
}
function view2 () {
    
    var pwd = document.getElementById("Cpassword");
    var type = pwd.getAttribute("type")==="password"?"text":"password";
    pwd.setAttribute("type",type);
    var viewpwd = document.getElementById("Confirmpassword");
    var icon = viewpwd.getAttribute("class")==="fa-solid fa-eye"?"fa-solid fa-eye-slash":"fa-solid fa-eye";
    viewpwd.setAttribute("class",icon);
    
}

function nameCheck () {
    var name = document.getElementById("name").value;
    var name2 = document.getElementById("name");
    var validName = /^[A-Za-z][A-Za-z]{1,20}$/;
    if(validName.test(name)){
        name2.style.border="2px solid green"; 
        return true;      
    }
    else{
        name2.style.border="2px solid red";
        return false;
       
    }
}

function emailCheck () {
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    var validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(validEmail.test(email)){
        email2.style.border="2px solid green"; 
        return true;      
    }
    else{
        email2.style.border="2px solid red";
        return false;
       
    }
}
function passCheck () {
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("password");
    var validPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
    if(validPass.test(pass)){
        pass2.style.border="2px solid green";
        return true;
    }else{
        pass2.style.border="2px solid red";
        return false;
    }   
}
  function confirmPass () {
    var cPass= document.getElementById("Cpassword").value;
    var cPass2= document.getElementById("Cpassword");
    var cPass3= document.getElementById("password").value;
    if(cPass==cPass3){
        cPass2.style.border="2px solid green";
        return true;
    }else{
        cPass2.style.border="2px solid red";
        return false;
    }

}
function validation () {
    var button = document.getElementById("button");
    if(nameCheck()===true && emailCheck()===true && passCheck()===true && confirmPass()===true){
        button.disabled=false; 
        var btn= document.getElementById("button");
        btn.addEventListener("click",redirect)
            
    }else{
        button.disabled=true;
        
    }

}
function redirect (){
    window.location.href="http://127.0.0.1:5501/view/login.html";
}


function show () {
    var password = document.getElementById("pwd");
    password.classList.remove("show");
    password.style.display = "block";
}

