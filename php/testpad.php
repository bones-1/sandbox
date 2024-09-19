<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestPad</title>
    <style>
        body {
            background-color: rgb(55, 55, 55);
            color: white;
        }
    </style>
</head>

<body>

    <pre>
    <?php
    // include './__custom_php/files.php';

    // safe_readfile("orders.txt", "r", 1000);


    // $start = 1;
    // $end = 100;

    // function count_up($num, $stop)
    // {
    //     if ($num >= $stop){
    //         return $num;
    //     }
$multiplier = 2;
    //     return count_up($num + 1, $stop) + $num;
    // }
function dud ()
    {    // print $multiplier."</br>";

    // echo count_up($start, $end);
    $counter = [];
    $counter = array_pad($counter, 20, 1);
    // print count($counter);
    // print $multiplier."</br>";

    $bubble = function (&$value, $index) {
        global $multiplier;
        $value = $multiplier * ($index + 1);
    };

    array_walk($counter, $bubble );

    print_r($counter);
}





    ?>
</pre>
</body>

</html>