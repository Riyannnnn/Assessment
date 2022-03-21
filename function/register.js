function view1 (x) {
    
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

function validate () {
    var value = document.getElementById("password").value;
    console.log(value); 
    var valid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
    if(value.match(valid)){
        alert("correct");
        
    }
    else{
        alert("try again");
    }
passCheck()

}
function passCheck () {
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("Cpassword").value;
    if(pass1==pass2){
        button.disabled = false;
    }else{
        button.disabled=true;
        alert("button is disabled");
    }
}