<?php include "db.php"; ?>

<!DOCTYPE html>
<html>
<head>
<title>Student Data</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="table-container">

<h1>Student Records</h1>

<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>DOB</th>
<th>Gender</th>
<th>Course</th>
<th>Skills</th>
<th>Address</th>
</tr>
</thead>

<tbody>

<?php

$result = $conn->query("SELECT * FROM students");

while($row = $result->fetch_assoc()){

echo "<tr>
<td>{$row['name']}</td>
<td>{$row['email']}</td>
<td>{$row['phone']}</td>
<td>{$row['dob']}</td>
<td>{$row['gender']}</td>
<td>{$row['course']}</td>
<td>{$row['skills']}</td>
<td>{$row['address']}</td>
</tr>";

}

?>

</tbody>
</table>

</div>

</body>
</html>