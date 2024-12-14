<?php

use Core\App;
use Core\Authenticator;
use Core\Database;
use Core\Validator;

$email = $_POST['email'];
$password = $_POST['password'];
$errors = [];

// validate form inputs 
if (!Validator::email($email)) {
    $errors['email'] = 'Please provide a valid email address.';
}

if (!Validator::string($password, 7, 255)) {
    $errors['password'] = 'Password must be between 7 and 255 characters.';
}

if (! empty($errors)) {
    return view('/registration/create.view.php', [
        'errors' => $errors,
    ]);
}

// check if the account already exits 
$db = App::resolve(Database::class);

$user = $db->query("select * from users where email = :email", ['email' => $email])->find();

// if yes, redirect to a login page
if ($user) {
    header('Location: /');
    exit();
} else {
    // If not, save to database, log user in, redirect
    $db->query('insert into users (email, password) values (:email, :password)', [
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT),
    ]);

    // mark that the user has logged in

    (new Authenticator) -> login($email);

    header('Location: /');
    exit();
}
