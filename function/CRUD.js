
function get(){
    const req = new XMLHttpRequest();
    req.open("GET","https://gorest.co.in/public/v2/users",true);
    req.setRequestHeader("Accept","application/JSON");
    req.setRequestHeader("Content-Type","application/JSON");
    req.send();
    req.onload = function(){
        const obj =JSON.parse(this.responseText)
        console.log(obj);
        if(this.status==200 && this.readyState==4){
            for(let item=0;item<obj.length;item++){
                document.getElementById("id").value=obj[item].id;
                document.getElementById("name").value=obj[item].name;
                document.getElementById("email").value=obj[item].email;
                document.getElementById("gender").value=obj[item].gender;
                document.getElementById("status").value =obj[item].status;
                var items =  document.getElementById("container2");
                var clone = items.cloneNode(true);
                document.getElementById("main").appendChild(clone);
            }
        }else{
            alert("Error" + this.status);
        }
    }
}


function getId (element){
    edit();
    const id = element.parentElement.parentElement.getElementsByClassName('input')[0].value
    console.log(id);
    const idReq = new XMLHttpRequest();
    idReq.open("GET","https://gorest.co.in/public/v2/users/"+id,true);
    idReq.setRequestHeader("Accept","application/JSON");
    idReq.setRequestHeader("Content-Type","application/JSON");
    idReq.send();
    idReq.onreadystatechange=function(){
        if(idReq.status==200 && idReq.readyState==4){
        const obj = JSON.parse(this.responseText)
        console.log(obj);
        document.getElementById("form").getElementsByTagName("input")[0].value=obj.id;
        document.getElementById("form").getElementsByTagName("input")[1].value=obj.name;
        document.getElementById("form").getElementsByTagName("input")[2].value=obj.email;
        document.getElementById("form").getElementsByTagName("input")[3].checked=
            document.getElementById("form").getElementsByTagName("input")[3].value==obj.gender;
        document.getElementById("form").getElementsByTagName("input")[4].checked=
            document.getElementById("form").getElementsByTagName("input")[4].value==obj.gender;
        document.getElementById("form").getElementsByTagName("input")[5].value=obj.status;

    }
}
}


function edit () {
    document.getElementById("popup").style.display="block";
}
function closed(){
    document.getElementById("popup").style.display="none";
}
// function showData(){
//     document.getElementById("container2").style.display="block";
// }

function post(){
    const postReq= new XMLHttpRequest();
    postReq.open("POST","https://gorest.co.in/public/v2/users/");
    postReq.setRequestHeader("Accept", "application/json");
    postReq.setRequestHeader("Content-Type", "application/json");
    postReq.setRequestHeader("Authorization", "Bearer 972ff6e9eb2fc8cd43e8ed744ae84f23d49d06d89a9b83ef2758e156530422c8");
    postReq.onreadystatechange = function(){
        if(postReq.status==201 && postReq.readyState==4){
            console.log(postReq.status);
        }
    }
    var data={
    "name": document.forms[0].elements[1].value,
    "gender": "male",
    "email": document.forms[0].elements[2].value,
    "status":document.forms[0].elements[5].value
    };
    
      postReq.send(JSON.stringify(data));  
      closed()  
      
}

function patch (element) {

    const id = element.parentElement.parentElement.getElementsByClassName('input')[0].value;
    const patchReq = new XMLHttpRequest();
    patchReq.open("PATCH","https://gorest.co.in/public/v2/users/"+id,true);
    patchReq.setRequestHeader("Accept","application/JSON");
    patchReq.setRequestHeader("Content-Type", "application/json");
    patchReq.setRequestHeader("Authorization", "Bearer 972ff6e9eb2fc8cd43e8ed744ae84f23d49d06d89a9b83ef2758e156530422c8");
    patchReq.onreadystatechange = function (){
            if (patchReq.readyState === 4) {
               console.log(patchReq.status);
               console.log(patchReq.responseText);             
            };
    }
    var newobj={
        name:document.forms[0].elements[1].value,
        email:document.forms[0].elements[2].value,
        status:document.forms[0].elements[5].value,
    
    }
    var json=JSON.stringify(newobj)
    patchReq.send(json);
    closed()
}

function deleteId (element){
    const id = element.parentElement.parentElement.getElementsByClassName('input')[0].value;
    const deleteReq = new XMLHttpRequest();
    deleteReq.open("DELETE","https://gorest.co.in/public/v2/users/"+id,true);
    deleteReq.setRequestHeader("Accept","application/JSON");
    deleteReq.setRequestHeader("Content-Type", "application/json");
    deleteReq.setRequestHeader("Authorization", "Bearer 972ff6e9eb2fc8cd43e8ed744ae84f23d49d06d89a9b83ef2758e156530422c8");
    deleteReq.onreadystatechange = function(){
        if(deleteReq.readyState==4){
        if(deleteReq.status==204){
            alert("Deleted Successfully");
            get() 
        }else{
            alert("Error " + this.status);
        }
    }
    }
deleteReq.send();

}