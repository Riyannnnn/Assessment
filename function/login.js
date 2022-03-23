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