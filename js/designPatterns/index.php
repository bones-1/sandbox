<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;
            height: auto;
            width: auto;
        }

        td {
            border: solid black 1px;
            text-align: center;
            height: 30px;
            width: 35px;
        }
    </style>
</head>

<body>

    <table id='my-table'>
        <tbody>
            <?php
            function make_table()
            {
                for ($x = 1; $x <=5; $x++) {
                    echo '<tr>';
                    for ($y = 1; $y <= 5; $y++) {
                        echo "<td>$y:$x</td>";
                    }
                    echo '</tr>';
                }
            }

            make_table();
            ?>
        </tbody>
    </table>

    <script>
        let table = document.body.firstElementChild;
        for (let x = 0; x < table.rows.length; x++)
            table.rows[x].cells[x].style.backgroundColor = 'red';
    </script>

</body>

</html>