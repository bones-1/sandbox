<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication</title>
</head>

<body>
    <?php

    $user = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];

    $dsn = 'mysql:dbname=books; host=localhost';
    $db = new PDO($dsn, 'bookorama', 'password');

    $stmt = $db->prepare('select Name, Password from Users where Name = :user');
    $stmt->bindValue('user', $user);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    @$result = $result['Password'] === $password;

    if ($result) {
        $heading = "Welcome!";
        $message = '<p>You have successfully signed in!</p><br>' . 'It is now: ' . date('l, F d, Y @ g:m:a');
    } else {
        if ($user !== '' || $password !== '') {
            $heading = "Access denied!";
            $message = '<p>You do not have access!</p>';
        } else {
            $heading = "Invalid Response";
            $message = '<p>What are you trying to do??</p>';
        }
    }

    print "<h1>$heading</h1>";
    print $message;
    ?>

</body>

</html>