<?php

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$dob = $data['dob'];
$gender = $data['gender'];
$course = $data['course'];
$skills = $data['skills'];
$address = $data['address'];

$stmt = $conn->prepare("INSERT INTO students (name,email,phone,dob,gender,course,skills,address) VALUES (?,?,?,?,?,?,?,?)");

$stmt->bind_param("ssssssss", $name,$email,$phone,$dob,$gender,$course,$skills,$address);

if($stmt->execute()){
    echo "Data saved successfully!";
}else{
    echo "Error occurred!";
}

$stmt->close();
$conn->close();

?>