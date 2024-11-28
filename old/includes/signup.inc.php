<?php

require('./class-autoloader.inc.php');

if (! $_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'Forbidden!';
    die();
}

// Grab form data 
$uid = $_POST['uid'];
$email = $_POST['email'];
$passwd = $_POST['passwd'];
$reppasswd = $_POST['reppasswd'];

// Instantiate SignupCtr class
$signup = new SignupCtr($uid, $email, $passwd, $reppasswd);

// Running error handlers
$signup -> signupUser();

// Going back to front page
header('location: ../index.php?error=none');