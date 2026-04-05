<?php

$result = "";
$expression = "";

if(isset($_POST['expression'])){
    $expression = $_POST['expression'];

    try{
        $result = eval("return $expression;");
    }catch(Throwable $e){
        $result = "Error";
    }
}

?>

<!DOCTYPE html>
<html>
<head>
<title>PHP Calculator</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">
<h1 class="title">PHP Calculator</h1>

<div class="calculator">

<form method="POST">

<input type="text" name="expression" id="display"
value="<?php echo $expression; ?>" readonly>

<div class="buttons">

<button class="control" type="button" onclick="clearDisplay()">AC</button>
<button class="control" type="button" onclick="deleteLast()">DEL</button>
<button class="operator" type="button" onclick="press('%')">%</button>
<button class="operator" type="button" onclick="press('/')">÷</button>

<button type="button" onclick="press('7')">7</button>
<button type="button" onclick="press('8')">8</button>
<button type="button" onclick="press('9')">9</button>
<button class="operator" type="button" onclick="press('*')">×</button>

<button type="button" onclick="press('4')">4</button>
<button type="button" onclick="press('5')">5</button>
<button type="button" onclick="press('6')">6</button>
<button class="operator" type="button" onclick="press('-')">−</button>

<button type="button" onclick="press('1')">1</button>
<button type="button" onclick="press('2')">2</button>
<button type="button" onclick="press('3')">3</button>
<button class="operator" type="button" onclick="press('+')">+</button>

<button class="zero" type="button" onclick="press('0')">0</button>
<button type="button" onclick="press('.')">.</button>

<button class="equal" type="submit">=</button>

</div>

</form>

<?php if($result !== ""){ ?>
<h2 style="color:white; text-align:center;">Result: <?php echo $result; ?></h2>
<?php } ?>

</div>
</div>

<script src="script.js"></script>

</body>
</html>