 var token = document.cookie = "idToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjY3ZWRiZDY3LWJhMjAtNGMwOC04M2M1LTMxZDE2MmRlN2RhZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5ODI1NDQzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk4MjkwNDMsImlhdCI6MTY0OTgyNTQ0MywiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.PPC-97NpK4xnLzbuP8JZBazmAa8yxOjGGuv_w-i8mywMk8ppaU-8PjjwxcLo7H-fGzGBl7DQCfk7ND3nNll8oQUnNpedkC2-AevyB99ne_MMp1U6a7KrQLNXRGhiiCX3TuGfs2AlQ-8330Ui3zMJM3J7PsLb3ycWk0mUGPX45NkzvnjK6QjVOq-4cIXUltIrNbiYztonXDXGt6frginZ4KJ2G_QG1Ud7UdNEabpsuxNzIoRKi_oH98100D84CfrxyTFCoPX1_YySMc98a6pORG4ryuiXYECXsi62yxymYPQ9x9oXljLsIJLijzfGawL9pAIa_YfZ7uMAhfNBWwQyhg"
 var idToken = document.cookie.split("=")[1];
 console.log(idToken);


 function showConfirm() {
     document.getElementById("confirm").style.display = "block";

 }

 function hideConfirm() {
     document.getElementById("confirm").style.display = "none";
     show()
 }

 function listShow() {
     document.getElementById("content").style.display = "none";
     document.getElementById("card").style.display = "flex";
     show();
 }

 function createShow() {
     document.getElementById("content").style.display = "flex";
     document.getElementById("card").style.display = "none";
     document.getElementById("head2").style.display = "none";
     document.getElementById("head").style.display = "block";
     document.getElementById("create").style.display = "block";
     document.getElementById("update").style.display = "none";
     document.forms[0].reset()
 }


 function employee() {
     paymentType()
     paymentMethod()
     currency()

     var url = "http://localhost/ec/employees";
     var employeeReq = new XMLHttpRequest();
     employeeReq.open("GET", url, true);
     employeeReq.setRequestHeader("Accept", "application/json");
     employeeReq.setRequestHeader("Companyid", "14")
     employeeReq.setRequestHeader("Content-type", "application/json");
     employeeReq.setRequestHeader("Access-Control-Allow-Origin", "*");
     employeeReq.setRequestHeader("Authorization", "Bearer" + idToken);
     employeeReq.onreadystatechange = function() {
         if (employeeReq.status == 200 && employeeReq.readyState == 4) {
             console.log(this.responseText);
             var data = JSON.parse(this.responseText);
             var selectEmp = document.getElementById("employee")
             console.log(data.dropdownList);
             for (let item = 0; item < data.dropdownList.length; item++) {
                 var option = document.createElement("option");
                 option.innerText = data.dropdownList[item].name;
                 option.value = data.dropdownList[item].id;
                 selectEmp.appendChild(option);
             }
         }
     }
     employeeReq.send();
 };

 function paymentType() {
     var typeReq = new XMLHttpRequest();
     typeReq.open("GET", "../paymentType.json", true);
     typeReq.setRequestHeader("Accept", "application/json");
     typeReq.setRequestHeader("Companyid", "14")
     typeReq.setRequestHeader("Content-type", "application/json");
     typeReq.setRequestHeader("Access-Control-Allow-Origin", "*");
     typeReq.setRequestHeader("Authorization", "Bearer" + idToken);
     typeReq.onreadystatechange = function() {
         if (typeReq.status == 200 && typeReq.readyState == 4) {
             var data = JSON.parse(this.responseText);
             var selectType = document.getElementById("payment-type");
             for (let item = 0; item < data.ledgerTemplates.length; item++) {
                 var typeOption = document.createElement("option");
                 typeOption.innerText = data.ledgerTemplates[item].value;
                 typeOption.value = data.ledgerTemplates[item].id;
                 selectType.appendChild(typeOption);
             }
         }
     }
     typeReq.send();
 };

 function paymentMethod() {
     var url = "http://localhost/ec/paymentMethod"
     var methodReq = new XMLHttpRequest();
     methodReq.open("GET", url, true);
     methodReq.setRequestHeader("Accept", "application/json");
     methodReq.setRequestHeader("Companyid", "14")
     methodReq.setRequestHeader("Content-type", "application/json");
     methodReq.setRequestHeader("Access-Control-Allow-Origin", "*");
     methodReq.setRequestHeader("Authorization", "Bearer" + idToken);
     methodReq.onreadystatechange = function() {
         if (methodReq.status == 200 && methodReq.readyState == 4) {
             console.log(this.responseText);
             var data = JSON.parse(this.responseText);
             var selectType = document.getElementById("payment-method");
             for (let item = 0; item < data.dropdownList.length; item++) {
                 var methodOption = document.createElement("option");
                 methodOption.innerText = data.dropdownList[item].value;
                 methodOption.value = data.dropdownList[item].id;
                 selectType.appendChild(methodOption);
             }
         }
     }
     methodReq.send();
 };


 function currency() {
     var url = "http://localhost/ec/currencies";
     var currencyReq = new XMLHttpRequest();
     currencyReq.open("GET", url, true);
     currencyReq.setRequestHeader("Accept", "application/json");
     currencyReq.setRequestHeader("Companyid", "14");
     currencyReq.setRequestHeader("Content-type", "application/json");
     currencyReq.setRequestHeader("Access-Control-Allow-Origin", "*");
     currencyReq.setRequestHeader("Authorization", "Bearer" + idToken);
     currencyReq.onreadystatechange = function() {
         if (currencyReq.status == 200 && currencyReq.readyState == 4) {
             console.log(this.responseText);
             var data = JSON.parse(this.responseText);
             var selectType = document.getElementById("currency");
             for (let item = 0; item < data.currencyList.length; item++) {
                 var currencyOption = document.createElement("option");
                 currencyOption.innerText = data.currencyList[item].currencyCode;
                 selectType.appendChild(currencyOption);
             }
         }
     }
     currencyReq.send();
 };

 function createExp() {
     listShow()

     function payoutwithSalary() {
         if (document.getElementById("payout-with-salary").checked == true) {
             document.getElementById("payout-with-salary").value = "Yes";
         } else {
             document.getElementById("payout-with-salary").value = "No";
         }
     }
     var createReq = new XMLHttpRequest();
     createReq.open("POST", "http://localhost/ec/expense", true);
     createReq.setRequestHeader("Accept", "application/json");
     createReq.setRequestHeader("Content-Type", "application/json");
     createReq.setRequestHeader("Companyid", "14");
     createReq.setRequestHeader("Authorization", "Bearer" + idToken);
     createReq.onreadystatechange = function() {
         if (createReq.status == 200 && createReq.readyState == 4) {
             console.log(this.status)
             alert("Successful");

         }
     }
     var details = {
         "attachments": [],
         "amount": parseInt(document.getElementById("total").value),
         "currency": {
             "currencyCode": document.getElementById("currency").value,
         },
         "employee": {
             "userId": parseInt(document.getElementById("employee").value),
         },
         "paymentType": {
             "id": parseInt(document.getElementById("payment-type").value),
         },
         "paymentMethod": {
             "id": parseInt(document.getElementById("payment-method").value),
         },
         "invoiceDate": document.getElementById("payment-date").value,
         "name": document.getElementById("expense-name").value,
         "notes": " ",
         "payoutWithSalary": payoutwithSalary(),
         "lineItems": [],
         "dimensions": []
     }
     createReq.send(JSON.stringify(details));
 }

 function show() {
     var req = new XMLHttpRequest();
     req.open("POST", "http://localhost/ec/expenses/stage/Inbox?count=10&offset=0", true);
     req.setRequestHeader("Content-type", "application/json");
     req.setRequestHeader("Authorization", "Bearer" + idToken);
     req.setRequestHeader("Companyid", "14");
     req.onreadystatechange = function() {
         if (this.readyState == 4) {
             if (this.status == 200) {
                 json = JSON.parse(this.responseText);
                 console.log(json);

                 for (let item = 0; item < json.expenses.length; item++) {
                     document.getElementById("id").value = json.expenses[item].id;
                     document.getElementById("employeeName").value = json.expenses[item].employee["name"];
                     document.getElementById("expenseName").value = json.expenses[item].name;
                     document.getElementById("date").value = json.expenses[item].invoiceDate.split("T")[0];
                     if (document.getElementById("note").value = json.expenses[item].notes == "" || document.getElementById("note").value == null) {
                         document.getElementById("note").value = "---"
                     } else {
                         document.getElementById("note").value = json.expenses[item].notes;
                     }
                     document.getElementById("totalAmount").value = json.expenses[item].amount;
                     document.getElementById("currencyType").value = json.expenses[item].currency["currencyCode"];
                     var data = document.getElementById("showList");
                     var clone = data.cloneNode(true);
                     clone.style.display = "block"
                     document.getElementById("card").appendChild(clone);
                 }
             }
         }
     }
     var obj = {}
     req.send(JSON.stringify(obj));
 }

 function deleted(ref) {

     var id = ref.parentElement.parentElement.parentElement.getElementsByTagName("input")[0].value;
     console.log(id);
     var deleteReq = new XMLHttpRequest();
     deleteReq.open("DELETE", "http://localhost/ec/expense/" + id, true);
     deleteReq.setRequestHeader("Content-type", "application/json");
     deleteReq.setRequestHeader("Authorization", "Bearer" + idToken);
     deleteReq.setRequestHeader("Companyid", "14");
     deleteReq.onreadystatechange = function() {
         if (deleteReq.readyState == 4) {
             if (deleteReq.status == 200) {

                 showConfirm();
             }
         }
     }
     deleteReq.send();

 }


 function showEdit() {
     document.getElementById("content").style.display = "flex";
     document.getElementById("card").style.display = "none";
     document.getElementById("head").style.display = "none";
     document.getElementById("head2").style.display = "block";
     document.getElementById("create").style.display = "none";
     document.getElementById("update").style.display = "block";
 }

 function getSingleCard(ref) {
     showEdit()
     var id = ref.parentElement.parentElement.parentElement.getElementsByTagName("input")[0].value;
     var getSCReq = new XMLHttpRequest();
     getSCReq.open("GET", "http://localhost/ec/expenses/" + id, true);
     getSCReq.setRequestHeader("Accept", "application/json");
     getSCReq.setRequestHeader("Companyid", "14");
     getSCReq.setRequestHeader("Content-type", "application/json");
     getSCReq.setRequestHeader("Access-Control-Allow-Origin", "*");
     getSCReq.setRequestHeader("Authorization", "Bearer" + idToken);
     getSCReq.onreadystatechange = function() {
         if (getSCReq.status == 200 && getSCReq.readyState == 4) {
             console.log(this.responseText);
             var data = JSON.parse(this.responseText);
             console.log(data);
             document.getElementById("idd").value = data.expense.id;
             document.getElementById("employee").value = data.expense.employee.userId;
             document.getElementById("expense-name").value = data.expense.name;
             document.getElementById("payment-type").value = data.expense.paymentType.id;
             document.getElementById("payment-method").value = data.expense.paymentMethod.id;
             document.getElementById("payment-date").value = data.expense.invoiceDate.split("T")[0];
             document.getElementById("payout-with-salary").checked = data.expense.payoutWithSalary;
             document.getElementById("notes").value = data.expense.notes;
             document.getElementById("total").value = data.expense.amount;
             document.getElementById("currency").value = data.expense.currency.currencyCode;
         }

     }
     getSCReq.send();
 }

 function updateData(ref) {

     var id = ref.parentElement.parentElement.parentElement.getElementsByTagName("input")[0].value;
     console.log(id);

     var putReq = new XMLHttpRequest();
     putReq.open("PUT", "http://localhost/ec/expense?id=" + id, true);
     putReq.setRequestHeader("Accept", "application/JSON");
     putReq.setRequestHeader("Content-Type", "application/json");
     putReq.setRequestHeader("Authorization", "Bearer" + idToken);
     putReq.setRequestHeader("Companyid", "14");
     putReq.onreadystatechange = function() {
         if (putReq.readyState == 4 && putReq.status == 200) {
             console.log(putReq.status);
             console.log(putReq.responseText);
             alert("Success");
             show()
         }
     }
     var obj = {
         "attachments": [],
         "amount": parseInt(document.getElementById("total").value),
         "currency": {
             "currencyCode": document.getElementById("currency").value,
         },
         "employee": {
             "userId": parseInt(document.getElementById("employee").value),
         },
         "paymentType": {
             "id": parseInt(document.getElementById("payment-type").value),
         },
         "paymentMethod": {
             "id": parseInt(document.getElementById("payment-method").value),
         },
         "invoiceDate": document.getElementById("payment-date").value,
         "name": document.getElementById("expense-name").value,
         "notes": " ",
         "payoutWithSalary": document.getElementById("payout-with-salary").checked,
         "lineItems": [],
         "dimensions": []
     }
     var json = JSON.stringify(obj)
     putReq.send(json)
     document.getElementById("content").style.display = "none";
     document.getElementById("card").style.display = "flex";

 }

 function validate() {
     var emp = document.getElementsByTagName("select");
     console.log(emp);
     for (let i = 0; i < emp.length; i++) {
         if (emp[i].value == "") {
             emp[i].style.border = "2px solid red";
         } else {
             emp[i].style.border = "2px solid green"
         }
     }

 }