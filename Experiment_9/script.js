let form = document.getElementById("myForm")

form.addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phone = document.getElementById("phone").value
let dob = document.getElementById("dob").value
let course = document.getElementById("course").value
let address = document.getElementById("address").value

let gender = document.querySelector('input[name="gender"]:checked')?.value || ""

let skills = []
document.querySelectorAll('.check-group input:checked').forEach(function(s){
skills.push(s.value)
})

fetch("insert.php", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name,
email,
phone,
dob,
gender,
course,
skills: skills.join(" "),
address
})
})
.then(res => res.text())
.then(data => {
alert(data)
form.reset()
})

})

document.getElementById("viewData").onclick=function(){
window.open("table.php")
}