<?php

$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$image = $_FILES['avatar'];

move_uploaded_file( $_FILES['avatar']['tmp_name'], __DIR__. "/avatar.png");

$data = [
    'name' => $name,
    'age'  => $age,
    'gender'=> $gender,
    'file' =>  $_FILES['avatar']['name'],
];


$data = json_encode($data) . PHP_EOL;

$fh = fopen('data.txt', 'a+');
fwrite($fh, $data);
fclose($fh);

// http_response_code(201);
$time = new DateTimeImmutable('now');
setcookie('test', $data, [
    'secure' => true,
    'samesite' => 'Strict',
    'domain' => 'localhost',
    'httponly' => true,
]);

print ('success');

