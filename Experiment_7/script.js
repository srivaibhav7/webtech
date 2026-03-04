let form = document.getElementById("myForm")

let students = []

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

let obj = {
name:name,
email:email,
phone:phone,
dob:dob,
gender:gender,
course:course,
skills:skills.join(" "),
address:address
}

students.push(obj)

form.reset()

})

document.getElementById("viewData").onclick=function(){

localStorage.setItem("students",JSON.stringify(students))

window.open("table.html")

}