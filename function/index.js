 var token = document.cookie="idToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjQ1MWMzMGVkLTVhZmItNDBmMy1iMzIzLTZiYTFlMzM3NGRmNiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5MzEwMTM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDkzMjcxOTUsImlhdCI6MTY0OTMyMzU5NSwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.d9_Rc1_2qKR6F--I4hP3iO5dBLRoYHE78RicWRxtf34GbP01z6zNxF_SwGlArBG3dO74FtJ8Itx7rY9fhbJ1vRU_DA7F3olkamUO8cJOxWyupFAM6cz_G2pRQNPQoSWnxjx-eWzFCtPt96y_DB3v6PI4vVgScUJDDfSZRizIW-I3n-Lhs_g8Fhn2XP-AQvmTnA0PAJr78KmtauoCqC6QBDk9Ru9AJxbdSjhS1sQYE1EdgxfPV2SKDk4P4zfF_ZPmwXXwzFbdPRpK-M10o2kSJjgyxJx22LAgvNGcCQpCPvjca6MEI1gPuzAliV7LpeyXeQVnon8nQiu0wTo3ISF-lQ"
 var idToken= document.cookie.split("=")[1];
 console.log(idToken);

 function showConfirm(){
     document.getElementById("confirm").style.display="block";
 }
 function hideConfirm(){
     document.getElementById("confirm").style.display="none";
 }

 function employee () {
    paymentType()
    var url = "http://localhost/ec/employees";
    const employeeReq = new XMLHttpRequest();
    employeeReq.open("GET",url,true);
    employeeReq.setRequestHeader("Accept","application/json");
    employeeReq.setRequestHeader("Companyid","14")
    employeeReq.setRequestHeader("Content-type","application/json");
    employeeReq.setRequestHeader("Access-Control-Allow-Origin","*");
    employeeReq.setRequestHeader("Authorization","Bearer"+idToken);
    employeeReq.onreadystatechange=function(){
        // alert(employeeReq.status);
        if(employeeReq.status==200 && employeeReq.readyState==4){
            console.log(this.responseText);
            var data= JSON.parse(this.responseText);
            var selectEmp = document.getElementById("employee")
            console.log(data.dropdownList);
            for(let item =0;item<=data.dropdownList.length;item++){
                var option = document.createElement("option");
                option.innerText=data.dropdownList[item].name;
                selectEmp.appendChild(option);
            }
        }else{
            // alert("An Error Occured ")
        }
    }
    employeeReq.send();
 };

 function paymentType(){
    var url = "http://localhost/ec/employees";
     const typeReq = new XMLHttpRequest();
     typeReq.open("GET",url,true);
     typeReq.setRequestHeader("Accept","application/json");
     typeReq.setRequestHeader("Companyid","14")
     typeReq.setRequestHeader("Content-type","application/json");
     typeReq.setRequestHeader("Access-Control-Allow-Origin","*");
     typeReq.setRequestHeader("Authorization","Bearer"+idToken);
     typeReq.onreadystatechange = function(){
        if(employeeReq.status==200 && employeeReq.readyState==4){
            console.log(this.responseText);
            var data= JSON.parse(this.responseText);
            var selectType = document.getElementById("payment-type");
        for(let item =0 ;item<=data.ledgerTemplates.length;item++){
            var typeOption = document.createElement("option");
            typeOption.innerText= data.ledgerTemplates[item].value;
            selectType.appendChild(typeOption);
        }
     }
 }
 typeReq.send();
};
