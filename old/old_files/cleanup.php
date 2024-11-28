<?php
$dsn = 'mysql:dbname=books; host=localhost';
$db = new PDO($dsn, 'bookorama', 'password');

$query = 'select ISBN from Books';
$stmt = $db -> prepare($query);
$stmt -> execute();

$trash = [];
echo '<strong>Items deleted:</strong><br>';
while ($value = $stmt->fetch(PDO::FETCH_ASSOC)) {
    if (! preg_match('/\d-\d{3}-\d{5}-\d/', $value['ISBN'])){
        echo $value['ISBN'] .'<br>';
        array_push($trash, $value['ISBN']);
    }
}

$query = 'delete from Books where ISBN = :isbn';
$stmt = $db -> prepare($query);
$stmt->bindParam('isbn', $junk, PDO::PARAM_STR);

foreach($trash as $junk){
    $stmt -> execute();
}

$db = null;

?>