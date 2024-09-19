<?php
//create short variable names
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$feedback = trim($_POST['feedback']);

# Data validation
$valid_email = '/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-
\.]+$/';

if (preg_match($valid_email, $email) === 0) {
    print <<<SAY
    <p>That is not a valid email address.</p>
    <p>Please return to the previous page and try again.</p>
    SAY;

    exit;
}

$toaddress = 'feedback@example.com'; // the default value
if (preg_match('/shop|customer service|retail/', $feedback)) {
    $toaddress = 'retail@example.com';
} else if (preg_match('/deliver|fulfill/', $feedback)) {
    $toaddress = 'fulfillment@example.com';
} else if (preg_match('/bill|account/', $feedback)) {
    $toaddress = 'accounts@example.com';
}
if (preg_match('/bigcustomer\.com/', $email)) {
    $toaddress = 'bob@example.com';
}
//set up some static information
$subject = "Feedback from web site";
$mailcontent = "Customer name: " . str_replace("\r\n", '', $name) . "\n" .
    "Customer email: " . str_replace("\r\n", '', $email) . "\n" .
    "Customer comments:\n" . str_replace("\r\n", '', $feedback) . "\n";
$fromaddress = "From: webserver@example.com";
//invoke mail() function to send mail
mail($toaddress, $subject, $mailcontent, $fromaddress);
?>
<!DOCTYPE html>
<html>

<head>
    <title>Bob's Auto Parts - Feedback Submitted</title>
</head>

<body>
    <h1>Feedback submitted</h1>
    <p>Your feedback (shown below) has been sent.</p>
    <p><?= nl2br(htmlspecialchars($feedback)) ?></p>
</body>

</html>