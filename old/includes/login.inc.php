<?php

require('./class-autoloader.inc.php');

if (! $_SERVER['REQUEST_METHOD'] === 'POST') {
    print "Forbidden!";
    exit();
}

// Grab info
$uid = $_POST['email'];
$passwd = $_POST['passwd'];


// Instantiate class
$login = new loginCtr($uid, $passwd);

// Login user
$login->loginUser();
