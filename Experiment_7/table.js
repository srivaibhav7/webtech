let data = JSON.parse(localStorage.getItem("students"))

let body = document.getElementById("tableBody")

for(let i=0;i<data.length;i++){

let row = `<tr>
<td>${data[i].name}</td>
<td>${data[i].email}</td>
<td>${data[i].phone}</td>
<td>${data[i].dob}</td>
<td>${data[i].gender}</td>
<td>${data[i].course}</td>
<td>${data[i].skills}</td>
<td>${data[i].address}</td>
</tr>`

body.innerHTML += row

}

function downloadCSV(){

let csv="Name,Email,Phone,DOB,Gender,Course,Skills,Address\n"

for(let i=0;i<data.length;i++){

csv += data[i].name+","+
data[i].email+","+
data[i].phone+","+
data[i].dob+","+
data[i].gender+","+
data[i].course+","+
data[i].skills+","+
data[i].address+"\n"

}

let blob = new Blob([csv],{type:"text/csv"})

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="students.csv"

a.click()

}

function copyTable(){

let text="Name Email Phone DOB Gender Course Skills Address\n"

for(let i=0;i<data.length;i++){

text+=data[i].name+" "
+data[i].email+" "
+data[i].phone+" "
+data[i].dob+" "
+data[i].gender+" "
+data[i].course+" "
+data[i].skills+" "
+data[i].address+"\n"

}

navigator.clipboard.writeText(text)

alert("Table copied!")

}