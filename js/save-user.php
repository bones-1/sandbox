<?php
require 'cors.php';

$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];

$data = [
    'name' => $name,
    'age'  => $age,
    'gender'=> $gender,
];

$data = json_encode($data) . PHP_EOL;

$fh = fopen('data.txt', 'a+');
fwrite($fh, $data);
fclose($fh);

http_response_code(201);