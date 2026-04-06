<?php

$name = "Vaibhav";
$age = 20;
$language = "PHP";

echo "<h1>My Info</h1>";
echo "<p>Name: $name</p>";
echo "<p>Age: $age</p>";
echo "<p>Favorite Language: $language</p>";

echo "<pre>";
var_dump($name);
var_dump($age);
var_dump($language);
echo "</pre>";

$city = "Bangalore";
echo "<p>I live in $city</p>";

$str1 = "Hello";
$str2 = 'World';

echo "<p>$str1 $str2</p>";

$a = 10;
$b = 5;

echo "<p>Addition: " . ($a + $b) . "</p>";
echo "<p>Multiplication: " . ($a * $b) . "</p>";

?>