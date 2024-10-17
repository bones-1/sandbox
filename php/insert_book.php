<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (
        !isset($_POST['ISBN']) || !isset($_POST['Author'])
        || !isset($_POST['Title']) || !isset($_POST['Price'])
    ) {
        echo "<p>You have not entered all the required details.
<br />
Please go back and try again.</p>";
        exit;
    }
    // create short variable names
    $inputs['isbn'] = $_POST['ISBN'];
    $inputs ['author'] = $_POST['Author'];
    $inputs ['title'] = $_POST['Title'];
    $inputs ['price'] = doubleval($_POST['Price']);

    $dsn = 'mysql:dbname=books; host=localhost';

    @$db = new pdo($dsn,'bookorama', 'password');
    if ($db -> errorCode()) {
        echo "Error opening database";
        exit;
    }

    $values = ['isbn' => PDO::PARAM_STR,'author'=> PDO::PARAM_STR,'title' => PDO::PARAM_STR, 'price' => PDO::PARAM_INT];
    $query = "INSERT INTO Books VALUES (:isbn, :author, :title , :price )";

    $stmt = $db->prepare($query);

    foreach($values as $value => $type) {
    $stmt-> bindParam($value, $inputs[$value], $type);
    }
    $stmt-> execute();

    if ($stmt-> rowCount() > 0) {
        echo "<p>Book inserted into the database.</p>";
    } else {
        echo "<p>An error has occurred.<br/>
        The item was not added.</p>";
    }

    $db = null;
    ?>

</body>

</html>