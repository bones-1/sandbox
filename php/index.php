<!DOCTYPE html>
<html lang="en">

<?php
$documentTitle = "Order Form"
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title><?= $documentTitle ?></title>
</head>

<body>
    <form action="processorder.php" method="post">
        <table style="border: 0px;">
            <thead style="background: #cccccc;">
                <tr>
                    <td style="width: 150px; text-align: center;">Item</td>
                    <td style="width: 15px; text-align: center;">Quantity</td>
                </tr>
            </thead>
            <tr>
                <td>Tires</td>
                <td><input type="text" name="tireqty" size="3"
                        maxlength="3" /></td>
            </tr>
            <tr>
                <td>Oil</td>
                <td><input type="text" name="oilqty" size="3"
                        maxlength="3" /></td>
            </tr>
            <tr>
                <td>Spark Plugs</td>
                <td><input type="text" name="sparkqty" size="3"
                        maxlength="3" /></td>
            </tr>
            <tr>
                <td><label for="addr">Shipping Address</label></td>
                <td>
                    <input type="text" name="address" id="addr" class="addr">
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: center;"><input
                        type="submit" value="Submit Order" class="submit_button" /></td>
            </tr>
        </table>
    </form>

</body>

</html>