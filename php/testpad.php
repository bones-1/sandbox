<?php

require("./book_source/Chapter06/page.php")
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <pre>
<?php
try {
    throw new Exception("A terrible error has occurred", 42);
} catch (Exception $e) {
    echo "Exception " . $e->getCode() . ": " . $e->getMessage() . "<br
/>" .
        " in " . $e->getFile() . " on line " . $e->getLine() . "<br />";
}
?>
<?php
class myException extends Exception
{
    function __toString()
    {
        return "<strong>Exception " . $this->getCode()
            . "</strong>: " . $this->getMessage() . "<br />"
            . "in " . $this->getFile() . " on line " . $this->getLine() . "
<br/>";
    }
}
try {
    throw new myException("A terrible error has occurred", 42);
} catch (myException $m) {
    echo $m;
}
?>



    </pre>

</body>

</html>