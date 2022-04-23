 var token = document.cookie = "idToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjY3ZWRiZDY3LWJhMjAtNGMwOC04M2M1LTMxZDE2MmRlN2RhZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5ODI1NDQzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk4MjkwNDMsImlhdCI6MTY0OTgyNTQ0MywiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.PPC-97NpK4xnLzbuP8JZBazmAa8yxOjGGuv_w-i8mywMk8ppaU-8PjjwxcLo7H-fGzGBl7DQCfk7ND3nNll8oQUnNpedkC2-AevyB99ne_MMp1U6a7KrQLNXRGhiiCX3TuGfs2AlQ-8330Ui3zMJM3J7PsLb3ycWk0mUGPX45NkzvnjK6QjVOq-4cIXUltIrNbiYztonXDXGt6frginZ4KJ2G_QG1Ud7UdNEabpsuxNzIoRKi_oH98100D84CfrxyTFCoPX1_YySMc98a6pORG4ryuiXYECXsi62yxymYPQ9x9oXljLsIJLijzfGawL9pAIa_YfZ7uMAhfNBWwQyhg"
 var idToken = document.cookie.split("=")[1];



 var toggleContainer = document.getElementById("nav");
 var toggle = toggleContainer.getElementsByClassName("tab");
 for (var i = 0; i < toggle.length; i++) {
     toggle[i].addEventListener("click", function() {
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
     });
 }

 var buttonDisable = document.getElementById("")

 function showConfirm() {
     document.getElementById("confirm").style.display = "block";

 }

 function hideConfirm() {
     document.getElementById("confirm").style.display = "none";
     show();
     alert("Expense Deleted Successfully")
 }

 function hideWithout() {
     document.getElementById("confirm").style.display = "none";
 }

 function listShow() {
     try {
         document.getElementById("content").style.display = "none";
         document.getElementById("card").style.display = "flex";
         document.getElementById("btn").style.display = "flex";
         document.getElementById("showList").style.height = "350px";
         show();

     } catch (error) {
         console.log(error)
     }

 }

 function listShowView() {
     document.getElementById("content").style.display = "none";
     document.getElementById("card").style.display = "flex";
     document.getElementById("btn").style.display = "none";
     document.getElementById("showList").style.height = "300px";
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
         if (employeeReq.readyState == 4 && employeeReq.status == 200) {
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
         if (typeReq.readyState == 4 && typeReq.status == 200) {
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
         if (methodReq.readyState == 4 && methodReq.status == 200) {
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
         if (currencyReq.readyState == 4 && currencyReq.status == 200) {
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

 function createExp(event) {
     listShowView();

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
         if (createReq.readyState == 4) {
             json = JSON.parse(this.responseText);

             if (createReq.status == 200) {
                 console.log(this.status)
                 show()
                 alert(json["message"]);
             } else {
                 alert(json["message"]);
             }
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
         "notes": document.getElementById("notes").value,
         "payoutWithSalary": document.getElementById("payout-with-salary").checked,
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
             json = JSON.parse(this.responseText);
             console.log(this.responseText)
             console.log(this.response)
             if (this.status == 200) {
                 console.log(json);
                 document.getElementById("card").innerHTML = '';
                 for (let item = 0; item < json.expenses.length; item++) {
                     document.getElementById("id").value = json.expenses[item].id;
                     document.getElementById("employeeName").innerHTML = json.expenses[item].employee["name"];
                     document.getElementById("expenseName").innerHTML = json.expenses[item].name;
                     document.getElementById("date").innerHTML = json.expenses[item].invoiceDate.split("T")[0];
                     document.getElementById("payout-with-salary").checked = json.expenses[item].payoutWithSalary;
                     if (document.getElementById("note").innerHTML = json.expenses[item].notes == "" || document.getElementById("note").innerHTML == null) {
                         document.getElementById("note").innerHTML = "---"
                     } else {
                         document.getElementById("note").innerHTML = json.expenses[item].notes;
                     }
                     var amountFloat = parseFloat(json.expenses[item].amount).toFixed(2);
                     document.getElementById("totalAmount").innerHTML = amountFloat;
                     document.getElementById("currencyType").innerHTML = json.expenses[item].currency["currencyCode"];
                     var data = document.getElementById("showList");
                     var clone = data.cloneNode(true);
                     clone.style.display = "block"
                     document.getElementById("card").appendChild(clone);
                 }

             } else {
                 alert(json["message"]);
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
             json = JSON.parse(this.responseText);
             if (deleteReq.status == 200) {
                 showConfirm()
                     //  alert(json.message)
             } else {
                 alert(json.message)
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
         if (getSCReq.readyState == 4) {
             console.log(this.responseText);
             var data = JSON.parse(this.responseText);
             console.log(data);
             if (getSCReq.status == 200) {
                 document.getElementById("idd").value = data.expense.id;
                 document.getElementById("employee").value = data.expense.employee.userId;
                 document.getElementById("expense-name").value = data.expense.name;
                 document.getElementById("payment-type").value = data.expense.paymentType != null ? data.expense.paymentType.id : "";
                 document.getElementById("payment-method").value = data.expense.paymentMethod != null ? data.expense.paymentMethod.id : "";
                 document.getElementById("payment-date").value = data.expense.invoiceDate.split("T")[0];
                 document.getElementById("payout-with-salary").checked = data.expense.payoutWithSalary;
                 document.getElementById("notes").value = data.expense.notes;
                 var amountFloat = parseFloat(data.expense.amount).toFixed(2);
                 document.getElementById("total").value = amountFloat;
                 document.getElementById("currency").value = data.expense.currency.currencyCode;
             } else {
                 alert(data["message"]);
             }
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
         if (putReq.readyState == 4) {
             json = JSON.parse(this.responseText)
             if (putReq.status == 200) {
                 console.log(putReq.responseText);
                 alert(json.message);
                 show()
             } else {
                 alert(json.message);
             }
         }
     }
     var obj = {
         "attachments": [],
         "amount": parseFloat(document.getElementById("total").value).toFixed(2),
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
         "notes": document.getElementById("notes").value,
         "payoutWithSalary": document.getElementById("payout-with-salary").checked,
         "lineItems": [],
         "dimensions": []
     }
     var json = JSON.stringify(obj)
     putReq.send(json)
     document.getElementById("content").style.display = "none";
     document.getElementById("card").style.display = "flex";

 }



 function validatePT() {
     var pt = document.getElementById("payment-type");
     if (pt.value == "") {
         pt.style.border = "3px solid red";
     } else {
         pt.style.border = "3px solid green";
     }

 }

 function validatePM() {
     var pm = document.getElementById("payment-method");
     if (pm.value == "") {
         pm.style.border = "3px solid red";
     } else {
         pm.style.border = "3px solid green";
     }

 }

 var employeeValue = function validateEmp() {
     var returnValueEmp;
     var emp = document.getElementById("employee");
     if (emp.value == "") {
         emp.style.border = "3px solid red";
         returnValueEmp = false;
     } else {
         emp.style.border = "3px solid green";
         returnValueEmp = true;
     }
     buttonToggle(returnValueEmp)
 }

 var currrencyValue = function validateCurrency() {
     var returnValueCurrency;
     var cr = document.getElementById("currency");
     if (cr.value == "") {
         cr.style.border = "3px solid red";
         returnValueCurrency = false;
     } else {
         cr.style.border = "3px solid green";
         returnValueCurrency = true;
     }
     buttonToggle(returnValueCurrency)

 }

 var amountValue = function validateAmt() {
     var amt = document.getElementById("total");
     var returnValueAmt;

     if (amt.value != "" && amt.checkValidity()) {

         amt.style.border = "3px solid green";
         amt.value = parseFloat(amt.value).toFixed(2);
         returnValueAmt = true;

     } else {
         amt.style.border = "3px solid red";
         alert(amt.validationMessage);
         returnValueAmt = false;
     }


     buttonToggle(returnValueAmt)
 }


 var inputAmt = document.getElementById("total");
 var invalidInput = [
     "-",
     "+",
     "e",
     "E",
 ];
 inputAmt.addEventListener("keydown", function(e) {
     if (invalidInput.includes(e.key)) {
         e.preventDefault();
     }
 });



 var expenseValue = function expenseName() {
     var expname = document.getElementById("expense-name");
     var returnValueExp;
     var expenseNameReg = /^[a-zA-Z]+([a-z][A-Z][-][0-9]*)*/;
     if (expenseNameReg.test(expname.value) && expname.checkValidity) {
         expname.style.border = "3px solid green";
         returnValueExp = true;
     } else {
         expname.style.border = "3px solid red";
         //  alert(expname.validationMessage)
         returnValueExp = false;
     }
     buttonToggle(returnValueExp);
 }

 function validateDate() {
     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth() + 1;
     var yyyy = today.getFullYear();
     if (dd < 10) {
         dd = '0' + dd
     }
     if (mm < 10) {
         mm = '0' + mm
     }

     var maxDate = yyyy + '-' + mm + '-' + dd;
     document.getElementById("payment-date").setAttribute("max", maxDate);

 }


 function buttonToggle() {
     var btn1 = document.getElementById("submit");
     var btn2 = document.getElementById("save");
     if (document.forms[0].checkValidity()) {

         btn1.disabled = false;
         btn2.disabled = false;
         btn1.style.cursor = "pointer";
         btn2.style.cursor = "pointer";

     } else {
         btn1.disabled = true;
         btn2.disabled = true;
         btn1.style.cursor = "not-allowed";
         btn2.style.cursor = "not-allowed";
     }

 }


 var btnDisable = document.getElementById("submit")
 if (btnDisable.disabled) {
     btnDisable.style.cursor = "not-allowed";

 } else {
     btnDisable.style.cursor = "pointer";
 }

 var btnDisable2 = document.getElementById("save")
 if (btnDisable2.disabled) {
     btnDisable2.style.cursor = "not-allowed";

 } else {
     btnDisable2.style.cursor = "pointer";
 }