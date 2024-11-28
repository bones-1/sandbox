<?php

require './Validator.php';

$config = require './config.php';
$db = new Database($config['database']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];


    if (! Validator::string($_POST['body'], 1, 1000)) {
        $errors['body'] = 'A body is required, with no more than 1,000 characters.';
        $body = $_POST['body'];
    }


    if (empty($errors)) {
        $query = "insert into notes (body, uid) values (:body , :uid)";
        $db->query($query, [
            'body' => $_POST['body'],
            'uid' => 1
        ]);
    }
}

$heading = 'Create Note';
require('views/notes/create.view.php');

