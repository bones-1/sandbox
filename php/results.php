<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book-O-Rama Search Results</title>
</head>
<h1>Book-O-Rama Search Results</h1>
<?php
// Create short variable names

$searchtype = $_POST['searchtype'];
$searchterm = trim($_POST['searchterm']);

if (!$searchterm || !$searchtype) {
    echo "<p>You have not entered search details.<br>Go back and try again.</p>";
    exit();
}

switch ($searchtype) {
    case 'Title':
    case 'Author':
    case 'ISBN':
        break;
    default:
        echo
        '<p>That is not a valid search type. <br/>Please go back and try again.</p>';
        exit();
}

@$db = new mysqli('localhost', 'bookorama', 'password', 'books');
if (mysqli_connect_errno()) {
    echo '<p>Error: Could not connect to database. <br>Please try again later.</p>';
    exit();
}

$query = "SELECT ISBN, Author, Title, Price FROM Books WHERE $searchtype = ?";
$stmt = $db ->prepare($query);
$stmt -> bind_param('s', $searchterm);
$stmt -> execute();
$stmt -> store_result();

$stmt -> bind_result($isbn, $author, $title, $price);

echo '<p>Number of books found:</p>';

while ($stmt->fetch()) {
    echo "<p><strong>Title: " . $title . "</strong>";
    echo "<br />Author: " . $author;
    echo "<br />ISBN: " . $isbn;
    echo "<br />Price: \$" . number_format($price, 2) . "</p>";
}

$stmt -> free_result();
$db -> close()
?>

<body>

</body>

</html>