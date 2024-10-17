<?php
$title = 'Book-O-Rama\'s Catalogue Search';

$search_categories = [
    'author' => 'Author',
    'title' => 'Title',
    'isbn'  => 'ISBN',
]


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
</head>

<body>
    <h1>Book-O-Rama Catalogue Search</h1>

    <form action="results.php" method="post">
        <p><strong>Choose Search Type:</strong><br />
            <select name="searchtype">
                <option value="Author">Author</option>
                <option value="Title">Title</option>
                <option value="ISBN">ISBN</option>
            </select>
        </p>
        <p><strong>Enter Search Term:</strong><br />
            <input name="searchterm" type="text" size="40">
        </p>
        <p><input type="submit" name="submit" value="Search"></p>
    </form>

</body>

</html>