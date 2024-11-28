<?php 
declare(strict_types = 1);
require_once('autoloader.inc.php');

$operator = (string) $_POST['oper'];
$num1 = (int) $_POST['num1'];
$num2 = (int) $_POST['num2'];



$calculator = new Calculator\Calc($operator, $num1, $num2);
echo $calculator -> calculate();
?>