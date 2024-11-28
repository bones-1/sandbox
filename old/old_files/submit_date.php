<?php
$title = 'Submit User Date';
require("./header2.php");
?>

<form action="show_date.php" method="post">
    <label for="date">Enter a date</label>
    <input type='time' name="date" id="time">
    <input type="submit" value="Submit this time">
</form>

</body>

</html>