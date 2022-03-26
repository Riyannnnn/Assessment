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
