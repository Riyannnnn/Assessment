function view1 () {
    
    var pwd = document.getElementById("password");
    var type = pwd.getAttribute("type")==="password"?"text":"password";
    pwd.setAttribute("type",type);
    var viewpwd = document.getElementById("Newpassword")
    var icon = viewpwd.getAttribute("class")==="fa-solid fa-eye"?"fa-solid fa-eye-slash":"fa-solid fa-eye";
    viewpwd.setAttribute("class",icon);   
}
function redirect(){
    window.location.href="http://127.0.0.1:5501/view/home.html";
    
}
function userValidate (){
    var user = document.getElementById("email").value;
    var user2 = document.getElementById("email");
    console.log(user)
    if(user==""){
        user2.style.border="2px solid red"; 
        return false;      
    }
    else{
        user2.style.border="2px solid green";
        return true;
       
    }
}
function passValidate () {
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


function validate (){
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var button = document.getElementById("button");
    if(userValidate()==true && passValidate()==true){
        button.disabled=false;   
    }
        else{
          button.disabled=true;     
    }
}
