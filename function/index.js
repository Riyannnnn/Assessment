 var token = document.cookie="idToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImFmNDBiYmJmLWIzYmMtNDNjOS1hZDJhLWEwNDFkNDg3NWNiNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5NjQ5MzkwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk2NjE1NTAsImlhdCI6MTY0OTY1Nzk1MCwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.bKfx7h1GCazVoR2UoydWn0HMSeWE3QDcUps2D558pSp9OZDB4HxwqRiwQO2IDzi7Oh0qFqTvW9Vd67WZVnzFPTGaQ2tdi16gLQHZ-3sZuhnZexZBRXOlBhjVGNlIJgYChNmh_Dz7mCO2f_kUHAKbCCV-hpjrOClG8nS6MH15zqgjP7duGIH7n9Y6f1-7p8MH9jdZHEW0TqIMiNNYJ3Pmg6F-Nl3YXTXViM2lD39B22ABYMTl6CvzxQ0Fy2zkhfisGJC4V3djpVwUzvfdSJ65PxMDINRbxKOEA0HKv-R3pd_Vbgmi0MzVkjIeBCdayhwGahte1DV2T78YIKeyKGumCQ"
 var idToken= document.cookie.split("=")[1];
 console.log(idToken);

 function showConfirm(){
     document.getElementById("confirm").style.display="block";
 }
 function hideConfirm(){
     document.getElementById("confirm").style.display="none";
 }
 function listShow(){
    document.getElementById("showList").style.display="block";
    document.getElementById("content").style.display="none";
 }

 function employee () {
    paymentType()
    paymentMethod()
    currency()

    var url = "http://localhost/ec/employees";
    const employeeReq = new XMLHttpRequest();
    employeeReq.open("GET",url,true);
    employeeReq.setRequestHeader("Accept","application/json");
    employeeReq.setRequestHeader("Companyid","14")
    employeeReq.setRequestHeader("Content-type","application/json");
    employeeReq.setRequestHeader("Access-Control-Allow-Origin","*");
    employeeReq.setRequestHeader("Authorization","Bearer"+idToken);
    employeeReq.onreadystatechange=function(){
        if(employeeReq.status==200 && employeeReq.readyState==4){
            console.log(this.responseText);
            var data= JSON.parse(this.responseText);
            var selectEmp = document.getElementById("employee")
            console.log(data.dropdownList);
            for(let item =0;item<data.dropdownList.length;item++){
                var option = document.createElement("option");
                option.innerText=data.dropdownList[item].name;
                option.value=data.dropdownList[item].id;
                selectEmp.appendChild(option);
            }
        }else{
            // alert("An Error Occured ")
        }
    }
    employeeReq.send();
 };

 function paymentType(){
     const typeReq = new XMLHttpRequest();
     typeReq.open("GET","../paymentType.json",true);
     typeReq.setRequestHeader("Accept","application/json");
     typeReq.setRequestHeader("Companyid","14")
     typeReq.setRequestHeader("Content-type","application/json");
     typeReq.setRequestHeader("Access-Control-Allow-Origin","*");
     typeReq.setRequestHeader("Authorization","Bearer"+idToken);
     typeReq.onreadystatechange = function(){
        if(typeReq.status==200 && typeReq.readyState==4){
            var data= JSON.parse(this.responseText);
            var selectType = document.getElementById("payment-type");
        for(let item =0 ;item<data.ledgerTemplates.length;item++){
            var typeOption = document.createElement("option");
            typeOption.innerText= data.ledgerTemplates[item].value;
            typeOption.value=data.ledgerTemplates[item].id;
            selectType.appendChild(typeOption);
        }
     }
 }
 typeReq.send();
};

function paymentMethod(){
    var url = "http://localhost/ec/paymentMethod"
     const methodReq = new XMLHttpRequest();
     methodReq.open("GET",url,true);
     methodReq.setRequestHeader("Accept","application/json");
     methodReq.setRequestHeader("Companyid","14")
     methodReq.setRequestHeader("Content-type","application/json");
     methodReq.setRequestHeader("Access-Control-Allow-Origin","*");
     methodReq.setRequestHeader("Authorization","Bearer"+idToken);
     methodReq.onreadystatechange = function(){
        if(methodReq.status==200 && methodReq.readyState==4){
            console.log(this.responseText);
            var data= JSON.parse(this.responseText);
            var selectType = document.getElementById("payment-method");
        for(let item =0 ;item<data.dropdownList.length;item++){
            var methodOption = document.createElement("option");
            methodOption.innerText= data.dropdownList[item].value;
            methodOption.value= data.dropdownList[item].id;
            selectType.appendChild(methodOption);
        }
     }
 }
 methodReq.send();
};


function currency(){
    var url = "http://localhost/ec/currencies";
     const currencyReq = new XMLHttpRequest();
     currencyReq.open("GET",url,true);
     currencyReq.setRequestHeader("Accept","application/json");
     currencyReq.setRequestHeader("Companyid","14");
     currencyReq.setRequestHeader("Content-type","application/json");
     currencyReq.setRequestHeader("Access-Control-Allow-Origin","*");
     currencyReq.setRequestHeader("Authorization","Bearer"+idToken);
     currencyReq.onreadystatechange = function(){
        if(currencyReq.status==200 && currencyReq.readyState==4){
            console.log(this.responseText);
            var data= JSON.parse(this.responseText);
            var selectType = document.getElementById("currency");
        for(let item =0 ;item<data.currencyList.length;item++){
            var currencyOption = document.createElement("option");
            currencyOption.innerText= data.currencyList[item].currencyCode;
            selectType.appendChild(currencyOption);
        }
     }
 }
 currencyReq.send();
};

function createExp (){
    function payoutwithSalary(){
        if(document.getElementById("payout-with-salary").checked==true){
           document.getElementById("payout-with-salary").value="Yes";
        }else{
            document.getElementById("payout-with-salary").value="No";
        }
    }
    const createReq = new XMLHttpRequest();
    createReq.open("POST","http://localhost/ec/expense",true);
    createReq.setRequestHeader("Accept", "application/json");
    createReq.setRequestHeader("Content-Type", "application/json");
    createReq.setRequestHeader("Companyid","14");
    createReq.setRequestHeader("Access-Control-Allow-Origin","*");
    createReq.setRequestHeader("Authorization","Bearer"+idToken);
    createReq.onreadystatechange=function(){
        if(createReq.status==200 && createReq.readyState==4){
            console.log(this.status)
        }
    }
    var details = { 
        "attachments" : [],
        "amount" :parseInt(document.getElementById("total").value),
        "currency" : {
            "currencyCode" : document.getElementById("currency").value,
        },
        "employee" : {
            "userId":parseInt(document.getElementById("employee").value),
        },
        "paymentType" : {
            "id" :parseInt(document.getElementById("payment-type").value),
        },
        "paymentMethod" : {
            "id" :parseInt(document.getElementById("payment-method").value),
        },
        "invoiceDate" :document.getElementById("payment-date").value,
        "name" : document.getElementById("expense-name").value,
        "notes" : " ",
        "payoutWithSalary" : payoutwithSalary(),
        "lineItems": [],
        "dimensions" : []
    }
    createReq.send(JSON.stringify(details));
}

function show(){
    var req = new XMLHttpRequest();
    req.open("POST","http://localhost/ec/expenses/stage/Inbox?count=10&offset=0",true);
    req.setRequestHeader("Content-type","application/json");
    req.setRequestHeader("Authorization","Bearer"+idToken);
    req.setRequestHeader("Companyid","14");
    req.onreadystatechange=function(){
        if(this.readyState==4){
            if(this.status==200){
                json=JSON.parse(this.responseText);
                console.log(json);
                for(let item=0;item<json.expenses.length;item++){
                    document.getElementById("employeeName").value=json.expenses[item].employee["name"];
                    document.getElementById("expenseName").value=json.expenses[item].name;
                    document.getElementById("date").value=json.expenses[item].invoiceDate;
                    document.getElementById("notes").value=json.expenses[item].notes;
                    if(document.getElementById("notes").value=json.expenses[item].notes==""|| document.getElementById("notes").value==null){
                        document.getElementById("notes").value="---"
                    }
                    document.getElementById("totalAmount").value=json.expenses[item].amount;
                    document.getElementById("currencyType").value=json.expenses[item].currency["currencyCode"];
                    var data= document.getElementById("showList");
                    var clone= data.cloneNode(true);
                    document.getElementById("showList").style.display="block"
                    document.getElementById("card").appendChild(clone);
                }
            }
            }
        }
    var obj={}
    req.send(JSON.stringify(obj));
}