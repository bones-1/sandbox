<?php

declare(strict_types=1);

require_once("./includes/class-autoloader.inc.php");

$sessionExpires = (new DateTimeImmutable()) ->getTimestamp() + 1000;
session_set_cookie_params($sessionExpires, '/', 'localhost', true);
session_start();

if (isset($_SESSION) && isset($_SESSION['username'])) {
    header("location: ../home.php?error=none");
}

require_once("./views/header.view.phtml");



require_once("./views/main.view.phtml");
require_once("./views/form.view.phtml");

require_once("./views/footer.view.phtml");
