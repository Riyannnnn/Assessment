function movieNameCheck () {
    var movieName =document.getElementById("movieName");
    var validMovieName =/[a-zA-Z0-9 -]{1,20}/gm;
    if(validMovieName.test(movieName.value)) {
        movieName.style.border="2px solid green"; 
        return true;      
    }
    else{
        movieName.style.border="2px solid red";
        return false; 
    }    
}

function datecheck () {
    var date = document.getElementById("date");
    if(date.value!=null){
        date.style.border="2px solid green";
        return true;
    }else{
        date.style.border="2px solid red";
        return false
    }
}

function genreCheck () {
    var genre = document.getElementById("genre");
    if(genre){
        genre.style.border="2px solid green";
        return true;   
    }else{
        genre.style.border="2px solid red";
        return false;
    }
}

function descriptionCheck () {
    var description = document.getElementById("description"); 
    if(description.value!=""){
        description.style.border="2px solid green";
        return true;   
    }else{
        description.style.border="2px solid red";
        return false;
    }
}
   
function durationCheck () {
    var duration = document.getElementById("duration"); 
    if(duration.value!=""){
        duration.style.border="2px solid green";
        return true;   
    }else{
    duration.style.border="2px solid red";
        return false;
    }
}
   
function directorCheck () {
    var directorName =document.getElementById("director");
    var validDirectorName =/[a-zA-Z]{1,20}/gm;
    if(validDirectorName.test(directorName.value)) {
        directorName.style.border="2px solid green"; 
        return true;      
    }
    else{
        directorName.style.border="2px solid red";
        return false; 
    }    
}

function castCheck () {
    var castName =document.getElementById("castName");
    var validCastName =/[a-zA-Z]{1,20}/gm;
    if(validCastName.test(castName.value)) {
        castName.style.border="2px solid green"; 
        return true;      
    }
    else{
        castName.style.border="2px solid red";
        return false; 
    }  
}
function roleCheck () {
    var role =document.getElementById("role");
    var validrole =/[a-zA-Z]{1,20}/gm;
    if(validrole.test(role.value)) {
        role.style.border="2px solid green"; 
        return true;      
    }
    else{
        role.style.border="2px solid red";
        return false; 
    }  
} 

function posterCheck () {
    var poster = document.getElementById("poster");
    if(poster.value!= null){
        poster.style.border="2px solid green";
        return true;
    }else{
        poster.style.border="2px solid red";
        return false;
    }
}

function maxDate () {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
}
if(mm<10){
  mm='0'+mm
} 

var maxDate = yyyy+'-'+mm+'-'+dd;
console.log(maxDate)
document.getElementById("date").setAttribute("max", maxDate);
}




function show () {
    const req = new XMLHttpRequest();
    req.open("GET","/demo.json");
    req.setRequestHeader("accept","application/json")
    req.send();
    console.log(req)
    req.onload = function() {
        var toObj = JSON.parse(this.responseText)
        console.log(toObj)
        
        document.getElementById("movieName").value = toObj.movie.movieName;
        document.getElementById("date").value = toObj.movie.releasedDate;
        document.getElementById("genre").value = toObj.movie.genre;
        document.getElementById("description").value = toObj.movie.description;
        document.getElementById("duration").value = toObj.movie.duration;
        document.getElementById("director").value = toObj.movie.director;
        document.getElementById("castName1").value = toObj.movie.castName1;
        document.getElementById("role1").value = toObj.movie.role1;
        document.getElementById("castName2").value =toObj.movie.castName2;
        document.getElementById("role2").value = toObj.movie.role2;
        document.getElementById("castName3").value =toObj.movie.castName3;
        document.getElementById("role3").value = toObj.movie.role3;
    }
}



