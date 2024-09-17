<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bob's Auto Parts - Customer Feedback</title>
    <link rel="stylesheet" href="feedback.css">
  </head>
  <body>
    <h1>Customer Feedback</h1>
    <p>Please tell us what you think</p>

    <form action="processfeedback.php" method="post">
      <label for="name">Your name: </label><br />
      <input type="text" name="name" id="name" /><br><br>

      <label for="email">Your email address: </label><br >
      <input type="text" id="email" name="email" /><br><br>

      <label for="feedback">Your Feedback: </label><br >
      <textarea name="feedback" id="feedback"></textarea><br><br>

      <input type="submit" value="Send Feedback"><br><br>
    </form>

      <?php
    $string = "This is\tan example\nstring";
    /* Use tab and newline as tokenizing characters as well  */
    $tok = strtok($string, " \n\t");

    while ($tok !== false) {
        echo "Word=$tok<br />";
        $tok = strtok(" \n\t");
    }
    ?>
  </body>
</html>
