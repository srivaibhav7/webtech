function showData(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let dob=document.getElementById("dob").value;
let course=document.getElementById("course").value;
let address=document.getElementById("address").value;


let genderList=document.getElementsByName("gender");

let gender="";

for(let i=0;i<genderList.length;i++){

if(genderList[i].checked){

gender=genderList[i].value;

}

}



let skillsList=document.querySelectorAll(".check-group input:checked");

let skills="";

skillsList.forEach(function(item){

skills+=item.value+" ";

});



document.getElementById("output").innerHTML=

"<b>Name:</b> "+name+"<br>"+
"<b>Email:</b> "+email+"<br>"+
"<b>Phone:</b> "+phone+"<br>"+
"<b>DOB:</b> "+dob+"<br>"+
"<b>Gender:</b> "+gender+"<br>"+
"<b>Course:</b> "+course+"<br>"+
"<b>Skills:</b> "+skills+"<br>"+
"<b>Address:</b> "+address;


}