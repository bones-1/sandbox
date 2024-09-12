<?php
$company = "Bob's Auto Spare Parts";
$title = "Order Results";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $company . ' - ' . $title ?></title>
</head>

<body>
    <h1><?= $company ?></h1>
    <h2><?= $title ?></h2>

    <?php
//     @$fh = fopen("orders.txt", "rb");
//     if (!$fh) {
//         echo "<p><strong>No orders pending.<br />
// Please try again later.</strong></p>";
//         exit;
//     }
     $file_array = (file("orders.txt"));

     foreach($file_array as $value){
        echo $value . "</br>" ;
     }

    // fpassthru($fh);
    // flock($fh, LOCK_UN);
    // fclose($fh);

    ?>
</body>

</html>