function openNav () {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("sidenav").style.height = "100%";
    document.getElementById("logo").style.left = "250px";
    document.getElementById("logo").style.transition = "1s";
    document.getElementById("sideShow").style.left = "250px";
    document.getElementById("sideShow").style.transition = "0.8s";    
    document.getElementById("sideShow").style.width = "250px";  
    document.getElementById("popular").style.left = "515px";  
    document.getElementById("popular").style.width = "60%"; 
    document.getElementById("popular").style.transition = "0.8s";  
    document.getElementById("trending").style.left = "515px";  
    document.getElementById("trending").style.width = "60%"; 
    document.getElementById("trending").style.transition = "0.8s"; 
    document.getElementById("slide").style.left = "515px";  
    document.getElementById("slide").style.width = "60%"; 
    document.getElementById("slide").style.transition = "0.8s"; 

   }
  
  function closeNav () {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("sidenav").style.height = "0";
    document.getElementById("logo").style.left = "0px";
    document.getElementById("sideShow").style.left = "10px";
    document.getElementById("sideShow").style.width = "270px";  
    document.getElementById("popular").style.left = "385px";  
    document.getElementById("popular").style.width = "68%"; 
    document.getElementById("trending").style.left = "385px";  
    document.getElementById("trending").style.width = "68%"; 
    document.getElementById("slide").style.left = "400px";  
    document.getElementById("slide").style.width = "66%"; 
    
  }